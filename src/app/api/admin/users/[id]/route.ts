import { NextRequest, NextResponse } from "next/server"
import { getServerSession, Session } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { Role } from "@prisma/client"

type CallerRole = "SUPER_ADMIN" | "ADMIN" | "EDITOR" | null

function getCallerRole(session: Session | null): CallerRole {
  return (session?.user?.role as CallerRole) ?? null
}

function canManageUsers(callerRole: CallerRole) {
  return callerRole === "SUPER_ADMIN" || callerRole === "ADMIN"
}

function allowedRolesToAssign(callerRole: CallerRole): Role[] {
  if (callerRole === "SUPER_ADMIN") return ["SUPER_ADMIN", "ADMIN", "EDITOR"]
  if (callerRole === "ADMIN")       return ["EDITOR"]
  return []
}

type Params = { params: Promise<{ id: string }> }

export async function PATCH(req: NextRequest, { params }: Params) {
  const session    = await getServerSession(authOptions)
  const callerRole = getCallerRole(session)

  if (!canManageUsers(callerRole)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const { id } = await params

  // Prevent self-editing via Users panel
  if (session?.user?.id === id) {
    return NextResponse.json(
      { error: "Use the Settings page to manage your own account." },
      { status: 400 }
    )
  }

  try {
    const body         = await req.json()
    const { name, role } = body

    // Validate target role against what caller is allowed to assign
    if (role) {
      const allowed = allowedRolesToAssign(callerRole)
      if (!(allowed as string[]).includes(role)) {
        return NextResponse.json(
          { error: `You cannot assign the role "${role}". Allowed: ${allowed.join(", ")}` },
          { status: 403 }
        )
      }

      // Also check the target user's current role — ADMIN cannot edit other ADMINs / SUPER_ADMINs
      if (callerRole === "ADMIN") {
        const target = await prisma.adminUser.findUnique({ where: { id }, select: { role: true } })
        if (target && target.role !== "EDITOR") {
          return NextResponse.json(
            { error: "Admins can only manage Editor accounts." },
            { status: 403 }
          )
        }
      }
    }

    const cleanName = typeof name === "string"
      ? name.replace(/<[^>]*>/g, "").trim().slice(0, 100)
      : undefined

    const user = await prisma.adminUser.update({
      where: { id },
      data: {
        ...(cleanName !== undefined ? { name: cleanName || null } : {}),
        ...(role ? { role: role as Role } : {}),
      },
      select: { id: true, email: true, name: true, role: true, updatedAt: true },
    })

    return NextResponse.json(user)
  } catch {
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 })
  }
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  const session    = await getServerSession(authOptions)
  const callerRole = getCallerRole(session)

  if (!canManageUsers(callerRole)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const { id } = await params

  // Prevent self-deletion
  if (session?.user?.id === id) {
    return NextResponse.json({ error: "Cannot delete your own account" }, { status: 400 })
  }

  try {
    const target = await prisma.adminUser.findUnique({ where: { id }, select: { role: true } })

    // ADMIN can only delete EDITOR accounts
    if (callerRole === "ADMIN" && target?.role !== "EDITOR") {
      return NextResponse.json(
        { error: "Admins can only delete Editor accounts." },
        { status: 403 }
      )
    }

    // Prevent deleting the last SUPER_ADMIN
    if (target?.role === "SUPER_ADMIN") {
      const count = await prisma.adminUser.count({ where: { role: "SUPER_ADMIN" } })
      if (count <= 1) {
        return NextResponse.json(
          { error: "Cannot delete the last Super Admin account." },
          { status: 400 }
        )
      }
    }

    await prisma.adminUser.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 })
  }
}
