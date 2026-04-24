import AnimatedBackdrop from "@/components/elion/AnimatedBackdrop";
import IntroPreloader from "@/components/elion/IntroPreloader";
import Nav from "@/components/elion/Nav";
import Hero from "@/components/elion/Hero";
import LogoMarquee from "@/components/elion/LogoMarquee";
import Work from "@/components/elion/Work";
import Approach from "@/components/elion/Approach";
import Results from "@/components/elion/Results";
import CTA from "@/components/elion/CTA";
import Footer from "@/components/elion/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-obsidian text-bone">
      <IntroPreloader />
      <AnimatedBackdrop />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <LogoMarquee />
        <Work />
        <Approach />
        <Results />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
