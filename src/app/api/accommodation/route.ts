import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const [lodges, camps] = await Promise.all([
      prisma.lodge.findMany({
        where: { status: "PUBLISHED" },
        orderBy: { createdAt: "asc" },
        select: {
          id: true, name: true, slug: true, type: true, destination: true,
          description: true, highlights: true, amenities: true,
          priceFrom: true, coverImage: true, gallery: true, website: true,
        },
      }),
      prisma.camp.findMany({
        where: { status: "PUBLISHED" },
        orderBy: { createdAt: "asc" },
        select: {
          id: true, name: true, slug: true, type: true, destination: true,
          description: true, highlights: true, amenities: true,
          priceFrom: true, coverImage: true, gallery: true, website: true,
        },
      }),
    ])

    const sortedLodges = [
      ...lodges.filter((l) => l.slug === "serenity-camp-lodges"),
      ...lodges.filter((l) => l.slug !== "serenity-camp-lodges"),
    ]

    return NextResponse.json({ lodges: sortedLodges, camps }, {
      headers: { "Cache-Control": "public, s-maxage=120, stale-while-revalidate=600" },
    })
  } catch {
    return NextResponse.json({ lodges: [], camps: [] }, { status: 200 })
  }
}
