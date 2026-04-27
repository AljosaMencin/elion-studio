import AnimatedBackdrop from "@/components/elion/AnimatedBackdrop";
import IntroPreloader from "@/components/elion/IntroPreloader";
import Nav from "@/components/elion/Nav";
import Hero from "@/components/elion/Hero";
import CoreModules from "@/components/elion/CoreModules";
import HowItWorks from "@/components/elion/HowItWorks";
import SolutionsPreview from "@/components/elion/SolutionsPreview";
import ProofResults from "@/components/elion/ProofResults";
import WhyElion from "@/components/elion/WhyElion";
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
        <CoreModules />
        <HowItWorks />
        <SolutionsPreview />
        <ProofResults />
        <WhyElion />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
