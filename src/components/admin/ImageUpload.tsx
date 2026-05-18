"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Upload, X, Loader2 } from "lucide-react"

interface ImageUploadProps {
  value?: string
  onChange: (url: string) => void
  label?: string
}

export function ImageUpload({ value, onChange, label = "Cover Image" }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleFile(file: File) {
    if (!file.type.startsWith("image/")) {
      setError("Please select an image file")
      return
    }
    setUploading(true)
    setError("")
    try {
      const form = new FormData()
      form.append("file", file)
      const res = await fetch("/api/admin/upload", { method: "POST", body: form })
      if (!res.ok) throw new Error("Upload failed")
      const { url } = await res.json()
      onChange(url)
    } catch {
      setError("Upload failed. Try again.")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-[#1A1A1A]">{label}</p>
      {value ? (
        <div className="relative w-full h-48 rounded-lg overflow-hidden border border-[#E2E0DB] group">
          <Image src={value} alt="Upload preview" fill className="object-cover" />
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute top-2 right-2 p-1 bg-black/60 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-[#E2E0DB] rounded-lg hover:border-[#C5A059] hover:bg-[#F9F7F4] transition-colors text-[#737373]"
        >
          {uploading ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <>
              <Upload className="w-6 h-6 mb-2" />
              <span className="text-sm">Click to upload</span>
              <span className="text-xs mt-1">PNG, JPG, WEBP up to 10MB</span>
            </>
          )}
        </button>
      )}
      {error && <p className="text-xs text-red-500">{error}</p>}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
      />
    </div>
  )
}
