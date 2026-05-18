import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

async function guard() {
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })
  return null
}

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const unauth = await guard(); if (unauth) return unauth
  const { id } = await params
  const row = await prisma.camp.findUnique({ where: { id } })
  if (!row) return new NextResponse("Not found", { status: 404 })
  return NextResponse.json(row)
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const unauth = await guard(); if (unauth) return unauth
  const { id } = await params
  const body = await req.json()
  const { id: _id, createdAt: _ca, updatedAt: _ua, ...data } = body
  const row = await prisma.camp.update({
    where: { id },
    data: { ...data, priceFrom: data.priceFrom ? parseFloat(data.priceFrom) : null },
  })
  return NextResponse.json(row)
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const unauth = await guard(); if (unauth) return unauth
  const { id } = await params
  await prisma.camp.delete({ where: { id } })
  return new NextResponse(null, { status: 204 })
}
