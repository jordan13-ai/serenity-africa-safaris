"use client"
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
    const whatsappNumber = "+255626371646";
    const defaultMessage = "Hi! I'm interested in booking a safari/Kilimanjaro trek. Can you help me?";

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
        window.open(url, '_blank');
    };

    return (
        <>
            {/* Floating WhatsApp Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <Button
                    onClick={handleWhatsAppClick}
                    size="lg"
                    className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-110 p-0"
                    aria-label="Contact us on WhatsApp"
                >
                    <MessageCircle size={28} />
                </Button>

                {/* Tooltip */}
                <div className="absolute bottom-16 right-0 bg-black text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                    Chat with us on WhatsApp
                    <div className="absolute -bottom-1 right-4 w-2 h-2 bg-black rotate-45" />
                </div>
            </div>

            {/* Pulse Animation */}
            <style jsx>{`
                @keyframes pulse-ring {
                    0% {
                        transform: scale(0.95);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1.3);
                        opacity: 0;
                    }
                }
                .fixed button::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: 50%;
                    background: rgb(34, 197, 94);
                    animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                    z-index: -1;
                }
            `}</style>
        </>
    );
}
