import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })
  const { id } = await params
  const review = await prisma.review.findUnique({ where: { id } })
  if (!review) return new NextResponse("Not found", { status: 404 })
  return NextResponse.json(review)
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })
  const { id } = await params
  const body = await req.json()
  const review = await prisma.review.update({
    where: { id },
    data: {
      name: body.name,
      location: body.location || null,
      rating: parseInt(body.rating) || 5,
      quote: body.quote,
      trip: body.trip || null,
      avatar: body.avatar || null,
      featured: body.featured ?? false,
      status: body.status ?? "DRAFT",
    },
  })
  return NextResponse.json(review)
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })
  const { id } = await params
  await prisma.review.delete({ where: { id } })
  return new NextResponse(null, { status: 204 })
}
