export default function DestinationLoading() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] animate-pulse">
      <div className="relative h-[80vh] bg-[#EAE3D6]" />
      <div className="container mx-auto px-6 py-20">
        <div className="h-8 bg-[#EAE3D6] rounded-full w-36 mb-6" />
        <div className="h-14 bg-[#EAE3D6] rounded-full w-2/3 mb-4" />
        <div className="h-6 bg-[#EAE3D6] rounded-full w-1/2 mb-16" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-4 bg-[#EAE3D6] rounded-full" style={{ width: `${80 + (i % 4) * 5}%` }} />
            ))}
          </div>
          <div className="bg-[#EAE3D6] rounded-[2rem] h-64" />
        </div>
      </div>
    </div>
  )
}
