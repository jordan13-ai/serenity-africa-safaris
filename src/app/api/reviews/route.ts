import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const reviews = await prisma.review.findMany({
      where: { status: "PUBLISHED" },
      orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
      select: { id: true, name: true, location: true, rating: true, quote: true, trip: true, avatar: true, featured: true },
    })
    return NextResponse.json(reviews, {
      headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" },
    })
  } catch {
    return NextResponse.json([], { status: 200 })
  }
}
