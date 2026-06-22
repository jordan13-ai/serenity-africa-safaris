import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { seedTours } from "@/lib/seed-tours-data"

export async function POST() {
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })

  let created = 0
  let updated = 0
  const errors: string[] = []

  for (const tour of seedTours) {
    const { itinerary, ...tourData } = tour
    try {
      const existing = await prisma.tour.findUnique({ where: { slug: tourData.slug } })

      if (existing) {
        await prisma.tour.update({
          where: { slug: tourData.slug },
          data: {
            title: tourData.title,
            status: tourData.status,
            summary: tourData.summary,
            description: tourData.description,
            price: tourData.price,
            duration: tourData.duration,
            groupSize: tourData.groupSize,
            difficulty: tourData.difficulty,
            season: tourData.season,
            category: tourData.category,
            destination: tourData.destination,
            highlights: tourData.highlights,
            includes: tourData.includes,
            excludes: tourData.excludes,
            coverImage: tourData.coverImage,
            gallery: tourData.gallery,
          },
        })
        await prisma.itineraryDay.deleteMany({ where: { tourId: existing.id } })
        if (itinerary.length > 0) {
          await prisma.itineraryDay.createMany({
            data: itinerary.map((d) => ({ ...d, tourId: existing.id })),
          })
        }
        updated++
      } else {
        const created_tour = await prisma.tour.create({
          data: {
            title: tourData.title,
            slug: tourData.slug,
            status: tourData.status,
            summary: tourData.summary,
            description: tourData.description,
            price: tourData.price,
            duration: tourData.duration,
            groupSize: tourData.groupSize,
            difficulty: tourData.difficulty,
            season: tourData.season,
            category: tourData.category,
            destination: tourData.destination,
            highlights: tourData.highlights,
            includes: tourData.includes,
            excludes: tourData.excludes,
            coverImage: tourData.coverImage,
            gallery: tourData.gallery,
          },
        })
        if (itinerary.length > 0) {
          await prisma.itineraryDay.createMany({
            data: itinerary.map((d) => ({ ...d, tourId: created_tour.id })),
          })
        }
        created++
      }
    } catch (err) {
      errors.push(`${tourData.slug}: ${err instanceof Error ? err.message : String(err)}`)
    }
  }

  return NextResponse.json({
    success: true,
    created,
    updated,
    total: created + updated,
    errors: errors.length > 0 ? errors : undefined,
  })
}
