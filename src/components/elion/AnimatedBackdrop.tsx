const AnimatedBackdrop = () => {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#020202]">
      {/* Primary Indigo Aurora */}
      <div 
        className="absolute -left-[10%] -top-[10%] h-[100vh] w-[100vw] opacity-50 blur-[100px] animate-aurora"
        style={{ 
          background: "radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.15), transparent 70%)" 
        }} 
      />
      
      {/* Secondary Slate/Silver Aurora */}
      <div 
        className="absolute -right-[20%] top-[30%] h-[80vh] w-[80vw] opacity-40 blur-[120px] animate-aurora-2"
        style={{ 
          background: "radial-gradient(circle at 50% 50%, rgba(148, 163, 184, 0.1), transparent 65%)" 
        }} 
      />

      {/* Depth Violet Glow */}
      <div 
        className="absolute bottom-[-10%] left-[20%] h-[60vh] w-[60vw] opacity-30 blur-[80px] animate-aurora"
        style={{ 
          background: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1), transparent 70%)" 
        }} 
      />
    </div>
  );
};

export default AnimatedBackdrop;
