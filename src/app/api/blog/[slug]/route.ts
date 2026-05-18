import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params
    const post = await prisma.blogPost.findFirst({
      where: { slug, status: "PUBLISHED" },
    })
    if (!post) return new NextResponse("Not found", { status: 404 })
    return NextResponse.json(post, {
      headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600" },
    })
  } catch {
    return new NextResponse("Internal error", { status: 500 })
  }
}
