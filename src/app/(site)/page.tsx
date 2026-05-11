import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Introduction } from "@/components/sections/Introduction";
import { ToursCarousel } from "@/components/sections/ToursCarousel";
import { IconicDestinations } from "@/components/sections/IconicDestinations";
import { Experiences } from "@/components/sections/Experiences";
import { VideoSection } from "@/components/sections/VideoSection";
import { Accommodation } from "@/components/sections/Accommodation";
import { TravelerReviews } from "@/components/sections/TravelerReviews";
import { LatestStories } from "@/components/sections/LatestStories";
import { HomeCTA } from "@/components/sections/HomeCTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <TrustBar />
      <Introduction />
      <ToursCarousel />
      <IconicDestinations />
      <Experiences />
      <VideoSection />
      <Accommodation />
      <TravelerReviews />
      <LatestStories />
      <HomeCTA />
    </main>
  );
}
