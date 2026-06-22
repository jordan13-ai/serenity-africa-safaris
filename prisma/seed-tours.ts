import { config } from "dotenv"
config({ path: ".env.local" })

import { PrismaClient } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import { seedTours } from "../src/lib/seed-tours-data"

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

async function main() {
  let created = 0, updated = 0
  const errors: string[] = []

  for (const tour of seedTours) {
    const { itinerary, ...tourData } = tour
    try {
      const existing = await prisma.tour.findUnique({ where: { slug: tourData.slug } })
      if (existing) {
        await prisma.tour.update({
          where: { slug: tourData.slug },
          data: { ...tourData, price: tourData.price },
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
          data: { ...tourData, price: tourData.price },
        })
        if (itinerary.length > 0) {
          await prisma.itineraryDay.createMany({
            data: itinerary.map((d) => ({ ...d, tourId: created_tour.id })),
          })
        }
        created++
      }
      console.log(`✓ ${tourData.slug}`)
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      errors.push(`${tourData.slug}: ${msg}`)
      console.error(`✗ ${tourData.slug}: ${msg}`)
    }
  }

  console.log(`\nDone — ${created} created, ${updated} updated.`)
  if (errors.length) console.log("Errors:", errors)
}

main().catch(console.error).finally(() => prisma.$disconnect())
