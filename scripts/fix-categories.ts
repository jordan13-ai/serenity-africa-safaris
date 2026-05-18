import { config } from "dotenv"
config({ path: ".env.local" })

import { PrismaClient } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import pg from "pg"

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const prisma = new PrismaClient({ adapter } as any)

const UPDATES = [
  { slug: "7-day-machame-route",        category: "Mountain Climbs" },
  { slug: "8-day-lemosho-route",        category: "Mountain Climbs" },
  { slug: "5-day-big-five-safari",      category: "Safaris" },
  { slug: "10-day-migration-beach",     category: "The Great Migration" },
  { slug: "3-day-fly-in-serengeti",     category: "Safaris" },
  { slug: "5-day-ruaha-wilderness",     category: "Adventurous Expeditions" },
  { slug: "7-day-southern-circuit",     category: "Safaris" },
  { slug: "3-day-nyerere-river-safari", category: "Safaris" },
  { slug: "5-day-zanzibar-escape",      category: "Beach Holidays" },
]

async function main() {
  for (const { slug, category } of UPDATES) {
    const r = await prisma.tour.updateMany({ where: { slug }, data: { category } })
    console.log(`${slug}: ${r.count > 0 ? "✅ → " + category : "⚠️  not found"}`)
  }
  await prisma.$disconnect()
  await pool.end()
}

main().catch((e) => { console.error(e); process.exit(1) })
