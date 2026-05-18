export default function ItineraryLoading() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] animate-pulse">
      <div className="relative h-[90vh] bg-[#1A1A1A]/20" />
      <div className="container px-6 mx-auto -mt-24 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-10">
            <div className="bg-white p-14 rounded-[3rem] border border-[#EAE3D6]">
              <div className="h-6 bg-[#EAE3D6] rounded-full w-28 mb-8" />
              <div className="h-12 bg-[#EAE3D6] rounded-full w-3/4 mb-6" />
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-4 bg-[#EAE3D6] rounded-full" style={{ width: `${75 + (i % 4) * 6}%` }} />
                ))}
              </div>
            </div>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white p-12 rounded-[3rem] border border-[#EAE3D6] h-48" />
            ))}
          </div>
          <div className="lg:col-span-4">
            <div className="sticky top-32 bg-white p-10 rounded-[3rem] border border-[#EAE3D6] h-96" />
          </div>
        </div>
      </div>
    </div>
  )
}
