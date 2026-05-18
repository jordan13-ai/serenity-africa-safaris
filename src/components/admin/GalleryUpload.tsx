"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Upload, X, Loader2, ImagePlus } from "lucide-react"

interface GalleryUploadProps {
  value: string[]
  onChange: (urls: string[]) => void
  label?: string
}

export function GalleryUpload({ value, onChange, label = "Gallery" }: GalleryUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleFiles(files: FileList) {
    const imageFiles = Array.from(files).filter((f) => f.type.startsWith("image/"))
    if (imageFiles.length === 0) { setError("Please select image files"); return }
    setUploading(true)
    setError("")
    try {
      const uploaded: string[] = []
      for (const file of imageFiles) {
        const form = new FormData()
        form.append("file", file)
        const res = await fetch("/api/admin/upload", { method: "POST", body: form })
        if (!res.ok) throw new Error("Upload failed")
        const { url } = await res.json()
        uploaded.push(url)
      }
      onChange([...value, ...uploaded])
    } catch {
      setError("One or more uploads failed. Try again.")
    } finally {
      setUploading(false)
    }
  }

  function remove(url: string) {
    onChange(value.filter((u) => u !== url))
  }

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-[#1A1A1A]">{label}</p>

      {value.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {value.map((url, i) => (
            <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-[#E2E0DB] group">
              <Image src={url} alt={`Gallery image ${i + 1}`} fill className="object-cover" />
              <button
                type="button"
                onClick={() => remove(url)}
                className="absolute top-1 right-1 p-1 bg-black/60 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="flex items-center gap-2 w-full px-4 py-3 border-2 border-dashed border-[#E2E0DB] rounded-lg hover:border-[#C5A059] hover:bg-[#F9F7F4] transition-colors text-[#737373] text-sm"
      >
        {uploading ? (
          <><Loader2 className="w-4 h-4 animate-spin" /><span>Uploading...</span></>
        ) : (
          <><ImagePlus className="w-4 h-4" /><span>Add images</span><Upload className="w-3.5 h-3.5 ml-auto opacity-50" /></>
        )}
      </button>

      {error && <p className="text-xs text-red-500">{error}</p>}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => e.target.files && e.target.files.length > 0 && handleFiles(e.target.files)}
      />
    </div>
  )
}
