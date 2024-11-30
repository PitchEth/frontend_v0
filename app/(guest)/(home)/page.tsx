import GoPitchIt from "@/components/guest/home/GoPitchIt";
import HeroSection from "@/components/guest/home/HeroSection";

export default function Home() {
    return (
        <main className="w-full flex flex-col overflow-x-hidden">
            <HeroSection />
            <GoPitchIt />
        </main>
    );
}