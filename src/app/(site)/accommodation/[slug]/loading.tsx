export default function AccommodationDetailLoading() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] animate-pulse">
      {/* Hero skeleton */}
      <div className="relative h-[75vh] bg-[#EAE3D6]" />

      {/* Content skeleton */}
      <div className="container px-6 mx-auto -mt-24 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-12 rounded-[3rem] border border-[#EAE3D6]">
              <div className="h-6 bg-[#EAE3D6] rounded-full w-32 mb-6" />
              <div className="h-10 bg-[#EAE3D6] rounded-full w-3/4 mb-4" />
              <div className="space-y-3">
                <div className="h-4 bg-[#EAE3D6] rounded-full w-full" />
                <div className="h-4 bg-[#EAE3D6] rounded-full w-5/6" />
                <div className="h-4 bg-[#EAE3D6] rounded-full w-4/5" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="bg-white p-10 rounded-[3rem] border border-[#EAE3D6] h-80" />
          </div>
        </div>
      </div>
    </div>
  )
}
