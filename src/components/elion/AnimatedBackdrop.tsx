const AnimatedBackdrop = () => {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#020202]">
      {/* Base color wash — always visible, no blur dependency (renders the purple tint on mobile) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 25% 15%, rgba(79, 70, 229, 0.22), transparent 60%), radial-gradient(ellipse 70% 60% at 80% 80%, rgba(139, 92, 246, 0.18), transparent 55%), radial-gradient(ellipse 90% 50% at 50% 100%, rgba(99, 102, 241, 0.12), transparent 60%)",
        }}
      />

      {/* Primary Indigo Aurora (animated, blur-heavy — adds polish on capable devices) */}
      <div
        className="absolute -left-[10%] -top-[10%] h-[100vh] w-[100vw] opacity-60 blur-[100px] animate-aurora"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.2), transparent 70%)",
        }}
      />

      {/* Secondary Slate/Silver Aurora */}
      <div
        className="absolute -right-[20%] top-[30%] h-[80vh] w-[80vw] opacity-50 blur-[120px] animate-aurora-2"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(148, 163, 184, 0.12), transparent 65%)",
        }}
      />

      {/* Depth Violet Glow */}
      <div
        className="absolute bottom-[-10%] left-[20%] h-[60vh] w-[60vw] opacity-40 blur-[80px] animate-aurora"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.14), transparent 70%)",
        }}
      />
    </div>
  );
};

export default AnimatedBackdrop;
