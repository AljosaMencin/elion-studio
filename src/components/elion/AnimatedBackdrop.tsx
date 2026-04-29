const AnimatedBackdrop = () => {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black">

      {/* Base image — slightly oversized so drift never exposes edges */}
      <div className="absolute inset-0 animate-bg-drift" style={{ margin: "-12px" }}>
        <img
          src="/elion-studio/future2.png"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* Atmosphere glow pulse — enhances the arc's brightness */}
      <div
        className="absolute inset-0 animate-atmos-pulse"
        style={{
          background:
            "radial-gradient(ellipse 85% 40% at 60% 42%, rgba(80,150,255,1) 0%, transparent 65%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Arc shimmer — periodic bright flash along the diagonal */}
      <div
        className="absolute inset-0 animate-arc-shimmer"
        style={{
          background:
            "linear-gradient(135deg, transparent 20%, rgba(180,220,255,1) 50%, transparent 80%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Edge vignette — keeps corners deep black */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 70% at 55% 45%, transparent 25%, rgba(0,0,0,0.75) 100%)",
        }}
      />
    </div>
  );
};

export default AnimatedBackdrop;
