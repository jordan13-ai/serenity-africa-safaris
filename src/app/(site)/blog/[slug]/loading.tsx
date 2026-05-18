export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      <div className="relative h-[60vh] bg-[#EAE3D6]" />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="h-8 bg-[#EAE3D6] rounded-full w-24 mb-6" />
        <div className="h-12 bg-[#EAE3D6] rounded-full w-3/4 mb-4" />
        <div className="h-6 bg-[#EAE3D6] rounded-full w-1/2 mb-12" />
        <div className="space-y-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-4 bg-[#EAE3D6] rounded-full" style={{ width: `${85 + (i % 3) * 5}%` }} />
          ))}
        </div>
      </div>
    </div>
  )
}
