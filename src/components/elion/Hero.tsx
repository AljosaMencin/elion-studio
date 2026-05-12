import { motion } from "framer-motion";
import EcosystemHero from "@/components/elion/EcosystemHero";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center px-6 pb-20 pt-40 md:px-12 md:pt-48">
      <div className="relative z-10 flex w-full max-w-[1100px] flex-col items-center text-center">
        <h1 className="max-w-[22ch] text-balance font-display text-[2.75rem] font-bold leading-[1.02] tracking-tight text-bone md:text-[4.25rem] md:leading-[1.04] lg:text-[5rem] animate-fade-in">
          Your business{" "}
          <span className="text-bone/30">connected through</span>{" "}
          one growth system.
        </h1>

      </div>

      {/* Ecosystem visual — desktop / large tablet only */}
      <motion.div
        className="relative z-10 mt-16 hidden w-full max-w-[1500px] lg:mt-20 lg:block"
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <EcosystemHero />
      </motion.div>

    </section>
  );
};

export default Hero;
