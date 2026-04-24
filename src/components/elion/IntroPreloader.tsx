import { useState, useEffect } from "react";

const IntroPreloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800); // Intro duration
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] animate-preloader-exit">
      <img 
        src="/Text 2.png" 
        alt="Elion" 
        className="w-48 md:w-80 animate-preloader-logo-refined" 
        style={{ filter: "brightness(0) invert(1)" }}
      />
    </div>
  );
};

export default IntroPreloader;
