import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center text-center px-4">
      <span className="text-primary text-[11px] font-bold tracking-[0.5em] uppercase mb-6 block">
        404 — Page Not Found
      </span>
      <h1 className="text-6xl md:text-8xl font-serif text-[#1A1A1A] mb-6 leading-tight">
        Lost in the <span className="italic text-gray-400">Savannah</span>
      </h1>
      <p className="text-gray-400 text-lg mb-12 max-w-md">
        The page you are looking for has wandered off the trail. Let us guide you back.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="rounded-full px-10 py-6 bg-[#1A1A1A] hover:bg-primary text-white text-[12px] font-bold tracking-[0.3em] uppercase transition-all duration-500">
          <Link href="/">Return Home</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="rounded-full px-10 py-6 border-[#EAE3D6] text-[12px] font-bold tracking-[0.3em] uppercase hover:border-primary hover:text-primary transition-all duration-500">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}
