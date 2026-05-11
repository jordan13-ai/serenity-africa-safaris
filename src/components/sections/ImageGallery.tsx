"use client"

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";


interface ImageGalleryProps {
    images: {
        src: string;
        alt: string;
        caption?: string;
    }[];
    title?: string;
    description?: string;
}

export function ImageGallery({ images, title, description }: ImageGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    if (!images || images.length === 0) return null;

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="py-24 bg-background">
            <div className="container max-w-7xl mx-auto px-4">
                {(title || description) && (
                    <div className="text-center mb-12">
                        {title && <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">{title}</h2>}
                        {description && <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{description}</p>}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
                            onClick={() => {
                                setCurrentIndex(index);
                                setIsOpen(true);
                            }}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Maximize2 className="text-white w-8 h-8" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox / Dialog */}
                {isOpen && (
                    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-4 right-4 text-white hover:bg-white/20 z-50"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={32} />
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 hidden md:flex"
                            onClick={handlePrevious}
                        >
                            <ChevronLeft size={48} />
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 hidden md:flex"
                            onClick={handleNext}
                        >
                            <ChevronRight size={48} />
                        </Button>

                        <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-4">
                            <Image
                                src={images[currentIndex].src}
                                alt={images[currentIndex].alt}
                                fill
                                className="object-contain"
                            />
                            <div className="absolute -bottom-16 left-0 right-0 text-center text-white/60 text-sm">
                                {currentIndex + 1} / {images.length}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
