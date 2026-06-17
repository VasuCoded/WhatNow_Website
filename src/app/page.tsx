import Hero from "@/components/home/Hero";
import FeaturedGuides from "@/components/home/FeaturedGuides";
import WhyWhatnow from "@/components/home/WhyWhatnow";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0B0F1A]">
      <Hero />
      <FeaturedGuides />
      <WhyWhatnow />
    </div>
  );
}
