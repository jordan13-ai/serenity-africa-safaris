import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Introduction } from "@/components/sections/Introduction";
import { PopularItineraries } from "@/components/sections/PopularItineraries";
import { IconicDestinations } from "@/components/sections/IconicDestinations";
import { Experiences } from "@/components/sections/Experiences";
import { VideoSection } from "@/components/sections/VideoSection";
import { Accommodation } from "@/components/sections/Accommodation";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TravelerReviews } from "@/components/sections/TravelerReviews";
import { LatestStories } from "@/components/sections/LatestStories";
import { HomeCTA } from "@/components/sections/HomeCTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <TrustBar />
      <Introduction />
      <PopularItineraries />
      <IconicDestinations />
      <Experiences />
      <VideoSection />
      <Accommodation />
      <WhyChooseUs />
      <TravelerReviews />
      <LatestStories />
      <HomeCTA />
    </main>
  );
}
