import FeaturedPitches from "@/components/guest/home/FeaturedPitches";
import GoPitchIt from "@/components/guest/home/GoPitchIt";
import HaveAnIdea from "@/components/guest/home/HaveAnIdea";
import HeroSection from "@/components/guest/home/HeroSection";
import HostPitchEvent from "@/components/guest/home/HostPitchEvent";
import Join from "@/components/guest/home/Join";

export default function Home() {
    return (
        <main className="w-full flex flex-col overflow-x-hidden">
            <HeroSection />
            <GoPitchIt />
            <HostPitchEvent />
            <FeaturedPitches />
            <Join />
            <HaveAnIdea />
        </main>
    );
}