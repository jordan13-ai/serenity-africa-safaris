"use client"

import { useState, KeyboardEvent } from "react"
import { X } from "lucide-react"

interface TagsInputProps {
  value: string[]
  onChange: (tags: string[]) => void
  placeholder?: string
}

export function TagsInput({ value, onChange, placeholder = "Add item, then press Enter" }: TagsInputProps) {
  const [input, setInput] = useState("")

  function add() {
    const trimmed = input.trim()
    if (trimmed && !value.includes(trimmed)) {
      onChange([...value, trimmed])
    }
    setInput("")
  }

  function remove(tag: string) {
    onChange(value.filter((t) => t !== tag))
  }

  function onKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault()
      add()
    } else if (e.key === "Backspace" && !input && value.length) {
      onChange(value.slice(0, -1))
    }
  }

  return (
    <div className="min-h-[42px] flex flex-wrap gap-1.5 p-2 border border-[#E2E0DB] rounded-md bg-white focus-within:ring-2 focus-within:ring-[#C5A059]/40 focus-within:border-[#C5A059]">
      {value.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#EBE8E3] text-[#1A1A1A] text-xs rounded"
        >
          {tag}
          <button type="button" onClick={() => remove(tag)} className="hover:text-red-500">
            <X className="w-3 h-3" />
          </button>
        </span>
      ))}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onKey}
        onBlur={add}
        placeholder={value.length === 0 ? placeholder : ""}
        className="flex-1 min-w-[120px] text-sm outline-none bg-transparent placeholder:text-[#737373]"
      />
    </div>
  )
}
