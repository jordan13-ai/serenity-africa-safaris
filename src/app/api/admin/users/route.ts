import { NextRequest, NextResponse } from "next/server"
import { getServerSession, Session } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { Role } from "@prisma/client"

type CallerRole = "SUPER_ADMIN" | "ADMIN" | "EDITOR" | null

function getCallerRole(session: Session | null): CallerRole {
  return (session?.user?.role as CallerRole) ?? null
}

/** Roles the caller is allowed to assign */
function allowedRolesToAssign(callerRole: CallerRole): Role[] {
  if (callerRole === "SUPER_ADMIN") return ["SUPER_ADMIN", "ADMIN", "EDITOR"]
  if (callerRole === "ADMIN")       return ["EDITOR"]          // ADMINs can only create Editors
  return []
}

function canManageUsers(callerRole: CallerRole) {
  return callerRole === "SUPER_ADMIN" || callerRole === "ADMIN"
}

export async function GET() {
  const session    = await getServerSession(authOptions)
  const callerRole = getCallerRole(session)

  if (!canManageUsers(callerRole)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  try {
    const users = await prisma.adminUser.findMany({
      orderBy: { createdAt: "asc" },
      select: { id: true, email: true, name: true, role: true, createdAt: true, updatedAt: true },
    })
    return NextResponse.json(users)
  } catch {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const session    = await getServerSession(authOptions)
  const callerRole = getCallerRole(session)

  if (!canManageUsers(callerRole)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  try {
    const { email, name, password, role } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }
    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 })
    }

    const allowed = allowedRolesToAssign(callerRole)
    const targetRole: Role = role || "EDITOR"

    if (!allowed.includes(targetRole)) {
      return NextResponse.json(
        { error: `Your role cannot assign "${targetRole}". Allowed: ${allowed.join(", ")}` },
        { status: 403 }
      )
    }

    // Sanitize email + name
    const cleanEmail = email.trim().toLowerCase().slice(0, 254)
    const cleanName  = typeof name === "string"
      ? name.replace(/<[^>]*>/g, "").trim().slice(0, 100)
      : null

    const existing = await prisma.adminUser.findUnique({ where: { email: cleanEmail } })
    if (existing) {
      return NextResponse.json({ error: "A user with this email already exists" }, { status: 409 })
    }

    const hashed = await bcrypt.hash(password, 12)
    const user   = await prisma.adminUser.create({
      data: { email: cleanEmail, name: cleanName, password: hashed, role: targetRole },
      select: { id: true, email: true, name: true, role: true, createdAt: true },
    })

    return NextResponse.json(user, { status: 201 })
  } catch {
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 })
  }
}
