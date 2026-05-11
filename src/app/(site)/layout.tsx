import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Partners } from "@/components/sections/Partners";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Partners />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
