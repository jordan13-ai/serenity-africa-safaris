import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })
  const records = await prisma.seoMeta.findMany({ orderBy: { page: "asc" } })
  return NextResponse.json(records)
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })
  const body = await req.json()
  const { page, title, description, keywords, ogImage, noIndex } = body
  if (!page) return NextResponse.json({ error: "page is required" }, { status: 400 })
  const record = await prisma.seoMeta.upsert({
    where: { page },
    update: { title, description, keywords, ogImage, noIndex: noIndex ?? false },
    create: { page, title, description, keywords, ogImage, noIndex: noIndex ?? false },
  })
  return NextResponse.json(record)
}
