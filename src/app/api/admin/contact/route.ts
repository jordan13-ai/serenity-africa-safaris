import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })
  const page = await prisma.pageContent.findUnique({ where: { page: "contact" } })
  return NextResponse.json(page?.content ?? {})
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })
  const content = await req.json()
  const page = await prisma.pageContent.upsert({
    where: { page: "contact" },
    update: { content },
    create: { page: "contact", content },
  })
  return NextResponse.json(page.content)
}
