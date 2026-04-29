import { useMemo } from "react";

const AnimatedBackdrop = () => {
  const stars = useMemo(() => {
    let s = 42;
    const rand = () => {
      s = (s * 1664525 + 1013904223) >>> 0;
      return s / 0xffffffff;
    };
    return Array.from({ length: 130 }, () => ({
      x: rand() * 1920,
      y: rand() * 1080,
      r: 0.3 + rand() * 1.3,
      o: 0.05 + rand() * 0.45,
    }));
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ background: "#010208" }}
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

      {/* Planet ambient light spilling into space */}
      <div
        className="absolute"
        style={{
          width: "75vw",
          height: "75vw",
          left: "-25vw",
          bottom: "-32vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 65% 28%, rgba(40,110,255,0.07) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      {/* Planet body */}
      <div
        className="absolute"
        style={{
          width: "min(54vw, 800px)",
          height: "min(54vw, 800px)",
          left: "-14vw",
          bottom: "-20vh",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 65% 28%, rgba(18,55,160,0.70) 0%, rgba(4,12,45,0.99) 42%, #010208 65%)",
        }}
      >
        {/* Surface terrain/cloud detail */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse 50% 35% at 58% 38%, rgba(28,85,210,0.28) 0%, transparent 52%), radial-gradient(ellipse 28% 20% at 24% 64%, rgba(8,35,110,0.18) 0%, transparent 48%)",
          }}
        />
      </div>

      {/* Atmosphere rim — the bright blue arc */}
      <div
        className="absolute"
        style={{
          width: "min(58vw, 860px)",
          height: "min(58vw, 860px)",
          left: "calc(-14vw - 2vw)",
          bottom: "calc(-20vh - 2vh)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 65% 28%, transparent 42%, rgba(100,175,255,0.70) 46%, rgba(55,135,255,0.28) 51%, rgba(25,90,220,0.07) 62%, transparent 71%)",
          filter: "blur(3px)",
        }}
      />

      {/* Outer corona — softer wide glow */}
      <div
        className="absolute"
        style={{
          width: "min(72vw, 1060px)",
          height: "min(72vw, 1060px)",
          left: "calc(-14vw - 9vw)",
          bottom: "calc(-20vh - 9vh)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 65% 28%, transparent 47%, rgba(40,115,255,0.11) 57%, rgba(18,75,200,0.04) 70%, transparent 80%)",
          filter: "blur(22px)",
        }}
      />
    </div>
  );
};

export default AnimatedBackdrop;
