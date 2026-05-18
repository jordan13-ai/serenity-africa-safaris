import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { readdir, stat, unlink } from "fs/promises"
import { join, extname, relative } from "path"
import { existsSync } from "fs"

const IMAGE_EXTS = new Set([".webp", ".jpg", ".jpeg", ".png", ".gif", ".avif", ".svg"])
const PUBLIC_DIR = join(process.cwd(), "public")

async function scanDir(dir: string): Promise<{ path: string; size: number; folder: string }[]> {
  const results: { path: string; size: number; folder: string }[] = []
  let entries: string[]
  try {
    entries = await readdir(dir)
  } catch {
    return results
  }
  for (const entry of entries) {
    if (entry.startsWith(".")) continue
    const full = join(dir, entry)
    let s
    try { s = await stat(full) } catch { continue }
    if (s.isDirectory()) {
      const sub = await scanDir(full)
      results.push(...sub)
    } else if (IMAGE_EXTS.has(extname(entry).toLowerCase())) {
      const rel = "/" + relative(PUBLIC_DIR, full).replace(/\\/g, "/")
      const folder = rel.split("/").slice(1, -1).join("/") || "root"
      results.push({ path: rel, size: s.size, folder })
    }
  }
  return results
}

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })

  const folder = req.nextUrl.searchParams.get("folder") ?? ""

  const [fsFiles, dbFiles] = await Promise.all([
    scanDir(join(PUBLIC_DIR, "images")),
    scanDir(join(PUBLIC_DIR, "uploads")),
  ])

  const dbRecords = await prisma.media.findMany({ orderBy: { createdAt: "desc" } })
  const dbMap = new Map(dbRecords.map((r) => [r.path, r]))

  const all = [...fsFiles, ...dbFiles].map((f) => ({
    path: f.path,
    size: f.size,
    folder: f.folder,
    id: dbMap.get(f.path)?.id ?? null,
    alt: dbMap.get(f.path)?.alt ?? null,
    isWebp: f.path.endsWith(".webp"),
    createdAt: dbMap.get(f.path)?.createdAt ?? null,
  }))

  const filtered = folder ? all.filter((f) => f.folder.startsWith(folder)) : all

  const folders = [...new Set(all.map((f) => f.folder))].sort()

  return NextResponse.json({ files: filtered, folders, total: filtered.length })
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })

  const { path } = await req.json()
  if (!path || typeof path !== "string") return new NextResponse("Bad request", { status: 400 })

  // Prevent path traversal
  const abs = join(PUBLIC_DIR, path)
  if (!abs.startsWith(PUBLIC_DIR)) return new NextResponse("Forbidden", { status: 403 })

  if (existsSync(abs)) {
    await unlink(abs)
  }

  // Remove DB record if exists
  await prisma.media.deleteMany({ where: { path } })

  return new NextResponse(null, { status: 204 })
}

export async function PATCH(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })

  const { path, alt } = await req.json()
  if (!path) return new NextResponse("Bad request", { status: 400 })

  const existing = await prisma.media.findFirst({ where: { path } })
  if (existing) {
    await prisma.media.update({ where: { id: existing.id }, data: { alt } })
  } else {
    // Create a record for static files when alt text is set
    const abs = join(PUBLIC_DIR, path)
    let size = 0
    try { size = (await stat(abs)).size } catch { /* ignore */ }
    await prisma.media.create({
      data: { filename: path.split("/").pop() ?? path, path, mimeType: "image/webp", size, alt },
    })
  }

  return NextResponse.json({ ok: true })
}
