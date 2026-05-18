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
  const tour = await prisma.tour.findUnique({
    where: { id },
    include: { itinerary: { orderBy: { day: "asc" } } },
  })
  if (!tour) return new NextResponse("Not found", { status: 404 })
  return NextResponse.json(tour)
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const unauth = await guard(); if (unauth) return unauth
  const { id } = await params
  const body = await req.json()

  // Strip immutable/auto-managed fields from body before update
  const { itinerary, id: _id, createdAt: _ca, updatedAt: _ua, ...rest } = body

  await prisma.itineraryDay.deleteMany({ where: { tourId: id } })

  const tour = await prisma.tour.update({
    where: { id },
    data: {
      ...rest,
      price: rest.price ? parseFloat(rest.price) : null,
      duration: rest.duration ? parseInt(rest.duration) : null,
      itinerary: itinerary?.length
        ? {
            create: itinerary.map(
              ({ id: _did, tourId: _tid, ...day }: Record<string, unknown>) => day
            ),
          }
        : undefined,
    },
    include: { itinerary: { orderBy: { day: "asc" } } },
  })
  return NextResponse.json(tour)
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const unauth = await guard(); if (unauth) return unauth
  const { id } = await params
  await prisma.tour.delete({ where: { id } })
  return new NextResponse(null, { status: 204 })
}
