import { useMemo } from "react";

const AnimatedBackdrop = () => {
  const stars = useMemo(() => {
    let s = 42;
    const rand = () => {
      s = (s * 1664525 + 1013904223) >>> 0;
      return s / 0xffffffff;
    };
    return Array.from({ length: 180 }, () => ({
      x: rand() * 1920,
      y: rand() * 1080,
      r: 0.4 + rand() * 1.5,
      o: 0.07 + rand() * 0.55,
    }));
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#020202]">

      {/* Original aurora blobs at full strength */}
      <div
        className="absolute -left-[10%] -top-[10%] h-[100vh] w-[100vw] opacity-50 blur-[100px] animate-aurora"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.15), transparent 70%)" }}
      />
      <div
        className="absolute -right-[20%] top-[30%] h-[80vh] w-[80vw] opacity-40 blur-[120px] animate-aurora-2"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(148, 163, 184, 0.1), transparent 65%)" }}
      />
      <div
        className="absolute bottom-[-10%] left-[20%] h-[60vh] w-[60vw] opacity-30 blur-[80px] animate-aurora"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1), transparent 70%)" }}
      />

      {/* Space layer at 10% opacity */}
      <div className="absolute inset-0" style={{ opacity: 0.1 }}>
        {/* Stars */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          {stars.map((star, i) => (
            <circle key={i} cx={star.x} cy={star.y} r={star.r} fill="white" opacity={star.o} />
          ))}
        </svg>

        {/* Planet body */}
        <div
          className="absolute"
          style={{
            width: "min(52vw, 760px)",
            height: "min(52vw, 760px)",
            left: "-13vw",
            bottom: "-18vh",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 66% 30%, rgba(28,72,195,0.75) 0%, rgba(8,18,55,0.99) 45%, #020202 68%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse 55% 38% at 56% 40%, rgba(40,100,220,0.22) 0%, transparent 55%), radial-gradient(ellipse 32% 22% at 28% 68%, rgba(15,48,130,0.14) 0%, transparent 50%)",
            }}
          />
        </div>

        {/* Atmosphere rim */}
        <div
          className="absolute"
          style={{
            width: "min(56vw, 820px)",
            height: "min(56vw, 820px)",
            left: "calc(-13vw - 2vw)",
            bottom: "calc(-18vh - 2vh)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 66% 30%, transparent 45%, rgba(55,130,255,0.28) 51%, rgba(30,95,220,0.09) 63%, transparent 74%)",
            filter: "blur(10px)",
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedBackdrop;
