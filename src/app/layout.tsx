import type { Metadata } from "next";
import { Playfair_Display, Poppins, Great_Vibes } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Serenity Africa Safaris | Luxury Tanzania Safari Experiences",
    template: "%s | Serenity Africa Safaris"
  },
  description: "Plan your dream Tanzania safari with Serenity Africa Safaris. Expert-guided luxury safaris to Serengeti, Ngorongoro Crater, Tarangire, Ruaha & Zanzibar. Personalized itineraries, exclusive tented camps, lodge accommodations and beach extensions. Book your Africa wildlife adventure today.",
  keywords: [
    "Tanzania Safari",
    "Luxury Safari Tanzania",
    "Serengeti Safari",
    "Great Migration Safari Tanzania",
    "Ngorongoro Crater Safari",
    "Tarangire National Park Safari",
    "Ruaha National Park Safari",
    "Zanzibar Beach Holiday",
    "Safari in Tanzania",
    "African Safari Tours",
    "Luxury African Safari",
    "Safari Packages Tanzania",
    "Wildlife Safari Tanzania",
    "Tanzania Safari Lodge",
    "Kilimanjaro Trekking",
    "Tanzania Family Safari",
    "Honeymoon Safari Tanzania",
    "Photography Safari Tanzania",
    "Walking Safari Tanzania",
    "Balloon Safari Serengeti",
    "Big Five Safari Africa",
    "All Inclusive Safari Tanzania",
    "Best Safari Operator Tanzania",
    "Luxury Tented Camp Tanzania",
    "Private Safari Tanzania",
    "Tanzania Itinerary",
    "Serenity Camp and Lodges",
    "Serengeti National Park Accommodation",
    "Ngorongoro Lodge",
    "Arusha Safari Company",
    "5 Star Safari Africa",
    "Tanzania Safari Cost",
    "Cheap Luxury Safari Tanzania",
    "Cultural Safari Tanzania",
    "Maasai Safari Experience",
    "Bush Camp Tanzania",
    "Fly-in Safari Tanzania",
    "Eco Friendly Safari Africa",
    "Tanzania Wildlife Tours",
    "Book Safari Africa Online"
  ],
  authors: [{ name: "Serenity Africa Safaris", url: "https://serenityafricasafaris.com" }],
  creator: "Serenity Africa Safaris",
  publisher: "Serenity Africa Safaris",
  category: "Travel & Tourism",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://serenityafricasafaris.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Serenity Africa Safaris | Luxury Tanzania Safari Experiences",
    description: "Plan your dream Tanzania safari with Serenity Africa Safaris. Expert-guided luxury safaris to Serengeti, Ngorongoro, Tarangire & Zanzibar. Personalized itineraries, exclusive lodges & tented camps.",
    url: "https://serenityafricasafaris.com",
    siteName: "Serenity Africa Safaris",
    images: [
      {
        url: "/images/hero/slide-1.webp",
        width: 1200,
        height: 630,
        alt: "Serenity Africa Safaris – Luxury Tanzania Safari",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serenity Africa Safaris | Luxury Tanzania Safari",
    description: "Expert-guided luxury safaris to Serengeti, Ngorongoro, Tarangire & Zanzibar. Discover Tanzania's greatest wildlife with Serenity Africa Safaris.",
    images: ["/images/hero/slide-1.webp"],
    creator: "@serenityafrica",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Serenity Africa Safaris",
    "url": "https://serenityafricasafaris.com",
    "logo": "https://serenityafricasafaris.com/images/logo.webp",
    "description": "Luxury Tanzania safari operator specializing in Serengeti, Ngorongoro, Tarangire, Ruaha and Zanzibar experiences.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Arusha",
      "addressCountry": "TZ"
    },
    "areaServed": ["Serengeti", "Ngorongoro", "Tarangire", "Ruaha", "Zanzibar", "Kilimanjaro"],
    "sameAs": [
      "https://serenitycampandlodges.com"
    ],
    "priceRange": "$$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tanzania Safari Packages",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "TouristTrip", "name": "Luxury Serengeti Safari" } },
        { "@type": "Offer", "itemOffered": { "@type": "TouristTrip", "name": "Great Migration Safari" } },
        { "@type": "Offer", "itemOffered": { "@type": "TouristTrip", "name": "Ngorongoro Crater Safari" } },
        { "@type": "Offer", "itemOffered": { "@type": "TouristTrip", "name": "Safari & Zanzibar Beach Combo" } },
        { "@type": "Offer", "itemOffered": { "@type": "TouristTrip", "name": "Kilimanjaro Trekking" } }
      ]
    }
  }

  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${poppins.variable} ${greatVibes.variable}`}>
      <head>
        {/* Preconnect to YouTube for faster video load */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://yt3.ggpht.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className="font-sans text-gray-900 bg-white antialiased"
      >
        {children}
      </body>
    </html>
  );
}
