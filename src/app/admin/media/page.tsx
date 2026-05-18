"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import Image from "next/image"
import {
  Upload, Trash2, Copy, Check, Loader2, Search,
  FolderOpen, ImageIcon, AlertCircle, X, Pencil
} from "lucide-react"

interface MediaFile {
  path: string
  size: number
  folder: string
  id: string | null
  alt: string | null
  isWebp: boolean
  createdAt: string | null
}

function fmt(bytes: number) {
  if (bytes < 1024) return `${bytes}B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`
}

export default function MediaPage() {
  const [files, setFiles] = useState<MediaFile[]>([])
  const [folders, setFolders] = useState<string[]>([])
  const [activeFolder, setActiveFolder] = useState("")
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [copiedPath, setCopiedPath] = useState("")
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)
  const [editAlt, setEditAlt] = useState<{ path: string; alt: string } | null>(null)
  const [error, setError] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/admin/media${activeFolder ? `?folder=${encodeURIComponent(activeFolder)}` : ""}`)
      if (!res.ok) return
      const data = await res.json()
      setFiles(data.files)
      setFolders(data.folders)
    } catch { /* leave state as-is */ } finally {
      setLoading(false)
    }
  }, [activeFolder])

  useEffect(() => { load() }, [load])

  async function uploadFiles(fileList: FileList) {
    setUploading(true)
    setError("")
    for (const file of Array.from(fileList)) {
      const form = new FormData()
      form.append("file", file)
      const res = await fetch("/api/admin/upload", { method: "POST", body: form })
      if (!res.ok) {
        const msg = await res.text()
        setError(`Upload failed: ${msg}`)
      }
    }
    setUploading(false)
    load()
  }

  async function deleteFile(path: string) {
    await fetch("/api/admin/media", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path }),
    })
    setConfirmDelete(null)
    load()
  }

  async function saveAlt(path: string, alt: string) {
    await fetch("/api/admin/media", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path, alt }),
    })
    setEditAlt(null)
    load()
  }

  function copyPath(path: string) {
    navigator.clipboard.writeText(path)
    setCopiedPath(path)
    setTimeout(() => setCopiedPath(""), 2000)
  }

  const displayed = files.filter((f) =>
    search ? f.path.toLowerCase().includes(search.toLowerCase()) : true
  )

  const nonWebp = files.filter((f) => !f.isWebp).length

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-serif text-[#1A1A1A] font-light">Media Library</h2>
          <p className="text-sm text-[#737373] mt-1">{files.length} files across {folders.length} folders</p>
        </div>
        <div className="flex items-center gap-3">
          {nonWebp > 0 && (
            <div className="flex items-center gap-2 px-3 py-2 bg-amber-50 border border-amber-200 rounded-lg text-amber-700 text-xs font-medium">
              <AlertCircle className="w-3.5 h-3.5" />
              {nonWebp} non-WebP files
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={(e) => e.target.files && uploadFiles(e.target.files)}
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="flex items-center gap-2 px-4 py-2 bg-[#C5A059] text-white rounded-md text-sm font-medium hover:bg-[#B8933F] disabled:opacity-50 transition-colors"
          >
            {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
            {uploading ? "Uploading..." : "Upload Images"}
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-100 rounded-lg text-sm text-red-600">
          <AlertCircle className="w-4 h-4 shrink-0" />{error}
          <button onClick={() => setError("")} className="ml-auto"><X className="w-3.5 h-3.5" /></button>
        </div>
      )}

      {/* Drag & Drop zone */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); e.dataTransfer.files && uploadFiles(e.dataTransfer.files) }}
        className="mb-6 border-2 border-dashed border-[#E2E0DB] rounded-xl p-6 text-center text-sm text-[#737373] hover:border-[#C5A059]/50 hover:bg-[#FDFBF7] transition-colors cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        <ImageIcon className="w-8 h-8 mx-auto mb-2 text-[#C2BDB6]" />
        Drag & drop images here, or click to browse — all uploads auto-converted to <strong>WebP</strong>
      </div>

      <div className="flex gap-6">
        {/* Folder sidebar */}
        <div className="w-52 shrink-0">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#737373] mb-2">Folders</p>
          <div className="space-y-0.5">
            <button
              onClick={() => setActiveFolder("")}
              className={`flex items-center gap-2 w-full px-3 py-2 rounded-md text-sm text-left transition-colors ${activeFolder === "" ? "bg-[#C5A059] text-white" : "text-[#737373] hover:bg-[#F5F2ED]"}`}
            >
              <FolderOpen className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">All files</span>
            </button>
            {folders.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFolder(f)}
                className={`flex items-center gap-2 w-full px-3 py-2 rounded-md text-sm text-left transition-colors ${activeFolder === f ? "bg-[#C5A059] text-white" : "text-[#737373] hover:bg-[#F5F2ED]"}`}
              >
                <FolderOpen className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{f}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main grid */}
        <div className="flex-1">
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C2BDB6]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search images..."
              className="w-full pl-9 pr-4 py-2.5 border border-[#E2E0DB] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 focus:border-[#C5A059]"
            />
          </div>

          {loading ? (
            <div className="flex justify-center py-20"><Loader2 className="w-6 h-6 animate-spin text-[#737373]" /></div>
          ) : displayed.length === 0 ? (
            <div className="text-center py-20 text-[#737373] text-sm">No images found.</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
              {displayed.map((file) => (
                <div key={file.path} className="group relative bg-white border border-[#E2E0DB] rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  {/* Thumbnail */}
                  <div className="relative aspect-square bg-[#F5F2ED]">
                    <Image
                      src={file.path}
                      alt={file.alt ?? file.path.split("/").pop() ?? ""}
                      fill
                      className="object-cover"
                      sizes="200px"
                      unoptimized
                    />
                    {!file.isWebp && (
                      <div className="absolute top-1 left-1 bg-amber-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                        Not WebP
                      </div>
                    )}
                    {/* Overlay actions */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button
                        onClick={() => copyPath(file.path)}
                        className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
                        title="Copy path"
                      >
                        {copiedPath === file.path ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 text-[#1A1A1A]" />}
                      </button>
                      <button
                        onClick={() => setEditAlt({ path: file.path, alt: file.alt ?? "" })}
                        className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
                        title="Edit alt text"
                      >
                        <Pencil className="w-3.5 h-3.5 text-[#1A1A1A]" />
                      </button>
                      <button
                        onClick={() => setConfirmDelete(file.path)}
                        className="p-2 bg-white/90 rounded-lg hover:bg-red-50 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-3.5 h-3.5 text-red-500" />
                      </button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-2">
                    <p className="text-[10px] text-[#1A1A1A] font-medium truncate leading-tight">
                      {file.path.split("/").pop()}
                    </p>
                    <p className="text-[9px] text-[#737373] mt-0.5">{fmt(file.size)}</p>
                    {file.alt && <p className="text-[9px] text-[#C5A059] mt-0.5 truncate" title={file.alt}>{file.alt}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Delete confirmation modal */}
      {confirmDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl">
            <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">Delete image?</h3>
            <p className="text-sm text-[#737373] mb-1 break-all">{confirmDelete}</p>
            <p className="text-xs text-red-500 mb-5">This permanently deletes the file from the server.</p>
            <div className="flex gap-3">
              <button onClick={() => setConfirmDelete(null)} className="flex-1 py-2 border border-[#E2E0DB] rounded-lg text-sm text-[#737373] hover:bg-[#F5F2ED]">Cancel</button>
              <button onClick={() => deleteFile(confirmDelete)} className="flex-1 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600">Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* Alt text edit modal */}
      {editAlt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl">
            <h3 className="text-base font-semibold text-[#1A1A1A] mb-4">Edit Alt Text</h3>
            <p className="text-xs text-[#737373] mb-2 break-all">{editAlt.path}</p>
            <input
              type="text"
              value={editAlt.alt}
              onChange={(e) => setEditAlt({ ...editAlt, alt: e.target.value })}
              placeholder="Describe the image for accessibility & SEO"
              className="w-full px-3 py-2.5 border border-[#E2E0DB] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 focus:border-[#C5A059] mb-4"
              autoFocus
            />
            <div className="flex gap-3">
              <button onClick={() => setEditAlt(null)} className="flex-1 py-2 border border-[#E2E0DB] rounded-lg text-sm text-[#737373] hover:bg-[#F5F2ED]">Cancel</button>
              <button onClick={() => saveAlt(editAlt.path, editAlt.alt)} className="flex-1 py-2 bg-[#C5A059] text-white rounded-lg text-sm font-medium hover:bg-[#B8933F]">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
