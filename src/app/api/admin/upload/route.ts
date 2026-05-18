import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { randomUUID } from "crypto"
import sharp from "sharp"

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })

  const form = await req.formData()
  const file = form.get("file") as File | null
  if (!file) return new NextResponse("No file", { status: 400 })

  if (file.size > 20 * 1024 * 1024) return new NextResponse("File too large (max 20MB)", { status: 400 })
  if (!file.type.startsWith("image/")) return new NextResponse("Images only", { status: 400 })

  const filename = `${randomUUID()}.webp`
  const uploadsDir = join(process.cwd(), "public", "uploads")
  await mkdir(uploadsDir, { recursive: true })

  const bytes = await file.arrayBuffer()
  const webpBuffer = await sharp(Buffer.from(bytes))
    .webp({ quality: 85 })
    .toBuffer()

  await writeFile(join(uploadsDir, filename), webpBuffer)

  const record = await prisma.media.create({
    data: {
      filename: file.name.replace(/\.[^.]+$/, ".webp"),
      path: `/uploads/${filename}`,
      mimeType: "image/webp",
      size: webpBuffer.length,
    },
  })

  return NextResponse.json({ url: `/uploads/${filename}`, id: record.id })
}
