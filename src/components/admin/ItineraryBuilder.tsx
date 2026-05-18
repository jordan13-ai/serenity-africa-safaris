"use client"

import { Plus, Trash2, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { TagsInput } from "./TagsInput"

export interface DayEntry {
  day: number
  title: string
  description: string
  meals: string[]
  accommodation: string
}

interface ItineraryBuilderProps {
  value: DayEntry[]
  onChange: (days: DayEntry[]) => void
}

export function ItineraryBuilder({ value, onChange }: ItineraryBuilderProps) {
  const [expanded, setExpanded] = useState<number[]>([0])

  function addDay() {
    const next: DayEntry = {
      day: value.length + 1,
      title: "",
      description: "",
      meals: [],
      accommodation: "",
    }
    onChange([...value, next])
    setExpanded((p) => [...p, value.length])
  }

  function removeDay(idx: number) {
    const updated = value
      .filter((_, i) => i !== idx)
      .map((d, i) => ({ ...d, day: i + 1 }))
    onChange(updated)
    setExpanded((p) => p.filter((i) => i !== idx).map((i) => (i > idx ? i - 1 : i)))
  }

  function update(idx: number, field: keyof DayEntry, val: unknown) {
    const updated = value.map((d, i) => (i === idx ? { ...d, [field]: val } : d))
    onChange(updated)
  }

  function toggle(idx: number) {
    setExpanded((p) => (p.includes(idx) ? p.filter((i) => i !== idx) : [...p, idx]))
  }

  return (
    <div className="space-y-2">
      {value.map((day, idx) => (
        <div key={idx} className="border border-[#E2E0DB] rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => toggle(idx)}
            className="flex items-center gap-3 w-full px-4 py-3 bg-[#F9F7F4] hover:bg-[#EBE8E3] transition-colors text-left"
          >
            <span className="w-6 h-6 rounded-full bg-[#C5A059] text-white text-xs flex items-center justify-center font-bold shrink-0">
              {day.day}
            </span>
            <span className="flex-1 text-sm font-medium text-[#1A1A1A] truncate">
              {day.title || `Day ${day.day}`}
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); removeDay(idx) }}
                className="p-1 hover:text-red-500 text-[#737373]"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              {expanded.includes(idx) ? (
                <ChevronUp className="w-4 h-4 text-[#737373]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#737373]" />
              )}
            </div>
          </button>

          {expanded.includes(idx) && (
            <div className="p-4 space-y-3 border-t border-[#E2E0DB]">
              <div>
                <label className="text-xs font-medium text-[#737373] uppercase tracking-wide">Title</label>
                <input
                  type="text"
                  value={day.title}
                  onChange={(e) => update(idx, "title", e.target.value)}
                  placeholder="e.g. Arrive in Arusha"
                  className="mt-1 w-full px-3 py-2 border border-[#E2E0DB] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 focus:border-[#C5A059]"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-[#737373] uppercase tracking-wide">Description</label>
                <textarea
                  value={day.description}
                  onChange={(e) => update(idx, "description", e.target.value)}
                  rows={3}
                  placeholder="What happens this day..."
                  className="mt-1 w-full px-3 py-2 border border-[#E2E0DB] rounded-md text-sm resize-y focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 focus:border-[#C5A059]"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-[#737373] uppercase tracking-wide">Meals included</label>
                <div className="mt-1">
                  <TagsInput
                    value={day.meals}
                    onChange={(v) => update(idx, "meals", v)}
                    placeholder="B, L or D — press Enter"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-[#737373] uppercase tracking-wide">Accommodation</label>
                <input
                  type="text"
                  value={day.accommodation}
                  onChange={(e) => update(idx, "accommodation", e.target.value)}
                  placeholder="e.g. Serengeti Serena Lodge"
                  className="mt-1 w-full px-3 py-2 border border-[#E2E0DB] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 focus:border-[#C5A059]"
                />
              </div>
            </div>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addDay}
        className="flex items-center gap-2 px-4 py-2.5 border-2 border-dashed border-[#E2E0DB] rounded-lg w-full hover:border-[#C5A059] text-[#737373] hover:text-[#C5A059] text-sm transition-colors"
      >
        <Plus className="w-4 h-4" />
        Add Day
      </button>
    </div>
  )
}
