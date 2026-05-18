"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Link from "@tiptap/extension-link"
import Placeholder from "@tiptap/extension-placeholder"
import { useEffect } from "react"
import {
  Bold, Italic, Strikethrough, Heading2, Heading3,
  List, ListOrdered, Quote, Minus, Link2, Unlink, Undo, Redo
} from "lucide-react"

interface RichTextEditorProps {
  value: string
  onChange: (html: string) => void
  placeholder?: string
}

export function RichTextEditor({ value, onChange, placeholder = "Write your article..." }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false, HTMLAttributes: { class: "text-[#C5A059] underline" } }),
      Placeholder.configure({ placeholder }),
    ],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class: "min-h-[320px] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none prose prose-sm max-w-none",
      },
    },
  })

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value, { emitUpdate: false })
    }
  }, [value, editor])

  if (!editor) return null

  const btn = (active: boolean) =>
    `p-1.5 rounded hover:bg-[#EBE8E3] transition-colors ${active ? "bg-[#EBE8E3] text-[#1A1A1A]" : "text-[#737373]"}`

  function setLink() {
    const url = window.prompt("URL", editor.getAttributes("link").href ?? "")
    if (url === null) return
    if (url === "") { editor.chain().focus().unsetLink().run(); return }
    editor.chain().focus().setLink({ href: url }).run()
  }

  return (
    <div className="border border-[#E2E0DB] rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#C5A059]/40 focus-within:border-[#C5A059]">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-0.5 px-2 py-1.5 border-b border-[#E2E0DB] bg-[#F9F7F4]">
        <button type="button" title="Undo" onClick={() => editor.chain().focus().undo().run()} className={btn(false)}><Undo className="w-3.5 h-3.5" /></button>
        <button type="button" title="Redo" onClick={() => editor.chain().focus().redo().run()} className={btn(false)}><Redo className="w-3.5 h-3.5" /></button>
        <span className="w-px h-4 bg-[#E2E0DB] mx-1" />
        <button type="button" title="Heading 2" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={btn(editor.isActive("heading", { level: 2 }))}><Heading2 className="w-3.5 h-3.5" /></button>
        <button type="button" title="Heading 3" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={btn(editor.isActive("heading", { level: 3 }))}><Heading3 className="w-3.5 h-3.5" /></button>
        <span className="w-px h-4 bg-[#E2E0DB] mx-1" />
        <button type="button" title="Bold" onClick={() => editor.chain().focus().toggleBold().run()} className={btn(editor.isActive("bold"))}><Bold className="w-3.5 h-3.5" /></button>
        <button type="button" title="Italic" onClick={() => editor.chain().focus().toggleItalic().run()} className={btn(editor.isActive("italic"))}><Italic className="w-3.5 h-3.5" /></button>
        <button type="button" title="Strikethrough" onClick={() => editor.chain().focus().toggleStrike().run()} className={btn(editor.isActive("strike"))}><Strikethrough className="w-3.5 h-3.5" /></button>
        <span className="w-px h-4 bg-[#E2E0DB] mx-1" />
        <button type="button" title="Bullet list" onClick={() => editor.chain().focus().toggleBulletList().run()} className={btn(editor.isActive("bulletList"))}><List className="w-3.5 h-3.5" /></button>
        <button type="button" title="Ordered list" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={btn(editor.isActive("orderedList"))}><ListOrdered className="w-3.5 h-3.5" /></button>
        <button type="button" title="Blockquote" onClick={() => editor.chain().focus().toggleBlockquote().run()} className={btn(editor.isActive("blockquote"))}><Quote className="w-3.5 h-3.5" /></button>
        <button type="button" title="Divider" onClick={() => editor.chain().focus().setHorizontalRule().run()} className={btn(false)}><Minus className="w-3.5 h-3.5" /></button>
        <span className="w-px h-4 bg-[#E2E0DB] mx-1" />
        <button type="button" title="Add link" onClick={setLink} className={btn(editor.isActive("link"))}><Link2 className="w-3.5 h-3.5" /></button>
        <button type="button" title="Remove link" onClick={() => editor.chain().focus().unsetLink().run()} disabled={!editor.isActive("link")} className={btn(false)}><Unlink className="w-3.5 h-3.5" /></button>
      </div>

      <EditorContent editor={editor} />
    </div>
  )
}
