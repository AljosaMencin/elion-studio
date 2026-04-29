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
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ background: "#04040A" }}
    >
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

      {/* Nebula — deep blue drift */}
      <div
        className="absolute animate-aurora"
        style={{
          left: "-10%",
          top: "-10%",
          width: "100vw",
          height: "100vh",
          opacity: 0.7,
          filter: "blur(100px)",
          background: "radial-gradient(circle at 50% 50%, rgba(20,70,200,0.20), transparent 65%)",
        }}
      />

      {/* Nebula — purple counter-drift */}
      <div
        className="absolute animate-aurora-2"
        style={{
          right: "-20%",
          top: "25%",
          width: "80vw",
          height: "80vh",
          opacity: 0.5,
          filter: "blur(120px)",
          background: "radial-gradient(circle at 50% 50%, rgba(90,20,170,0.15), transparent 65%)",
        }}
      />

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
            "radial-gradient(circle at 66% 30%, rgba(28,72,195,0.75) 0%, rgba(8,18,55,0.99) 45%, #04040A 68%)",
        }}
      >
        {/* Surface terrain detail */}
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

      {/* Atmosphere rim glow */}
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

      {/* Outer planetary haze */}
      <div
        className="absolute"
        style={{
          width: "min(68vw, 1000px)",
          height: "min(68vw, 1000px)",
          left: "calc(-13vw - 7vw)",
          bottom: "calc(-18vh - 7vh)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 66% 30%, transparent 50%, rgba(20,70,210,0.08) 64%, transparent 78%)",
          filter: "blur(32px)",
        }}
      />
    </div>
  );
};

export default AnimatedBackdrop;
