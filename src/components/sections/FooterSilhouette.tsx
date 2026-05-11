"use client"
import Image from "next/image"
import { useState, useEffect } from "react"

export function FooterSilhouette() {
    const [imageError, setImageError] = useState(false)

    return (
        <div className="w-full bg-[#EAE3D6] relative -mb-1 overflow-hidden select-none flex flex-col justify-end min-h-[150px] md:min-h-[250px] lg:min-h-[350px]">
            {/* 
                This container uses an aspect ratio to ensure the image scales perfectly across the bottom.
                Place your actual silhouette image (including the Maasai sketch) at this path:
                public/images/layout/footer-silhouette.png
            */}
            <div className="w-full relative h-[150px] md:h-[250px] lg:h-[350px]">
                {!imageError && (
                    <Image
                        src="/images/layout/footer-silhouette.png"
                        alt="African Savannah Horizon"
                        fill
                        className="object-contain object-bottom"
                        priority
                        onError={() => setImageError(true)}
                    />
                )}
                {imageError && (
                    <div className="absolute inset-0 flex items-center justify-center flex-col text-[#7E624A] opacity-50">
                        <p className="text-sm font-bold uppercase tracking-widest">Image Not Found</p>
                        <p className="text-xs mt-2">Please save your image to: /public/images/layout/footer-silhouette.png</p>
                    </div>
                )}
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-[5px] bg-[#7E624A]" />
        </div>
    )
}
