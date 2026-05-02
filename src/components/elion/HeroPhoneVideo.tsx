import React from "react";

// Hero visual — looping rotating phone reveal.
//
// Two render paths:
//   1. Browsers that support VP9 alpha (Chrome, Edge, Firefox, Android Chrome):
//      direct <video> playing public/videos/hero-phone.webm. True transparency.
//   2. iOS / iPadOS / macOS Safari (incl. iOS Chrome, Edge iOS, Messenger /
//      Instagram in-app browsers — they all use WKWebView, no VP9 alpha):
//      hidden <video> plays the original green-screen master, a <canvas>
//      reads each frame and chroma-keys the green out, displaying real
//      transparency. Slightly more CPU but pixel-perfect on every device.
//
// autoPlay requires `muted` + `playsInline` on iOS.

const detectIsSafari = (): boolean => {
  if (typeof window === "undefined") return false;
  const ua = window.navigator.userAgent;

  // Any phone/tablet that runs iOS or iPadOS
  if (/iPad|iPhone|iPod/.test(ua)) return true;

  // iPadOS 13+ identifies as Macintosh; sniff via touch capability
  const touchPoints =
    typeof navigator !== "undefined"
      ? (navigator as Navigator & { maxTouchPoints?: number }).maxTouchPoints
      : 0;
  if (/Macintosh/.test(ua) && touchPoints && touchPoints > 1) return true;

  // Desktop macOS Safari (not Chrome / Edge / Brave / Firefox)
  if (
    /Safari/.test(ua) &&
    !/Chrome|Chromium|Edg|OPR|Brave|Firefox|FxiOS/.test(ua)
  ) {
    return true;
  }

  return false;
};

// ── Canvas-based chroma-key video (Safari fallback) ─────────────────────────

const CanvasChromaKeyVideo: React.FC<{ src: string }> = ({ src }) => {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let raf = 0;
    let cancelled = false;

    // Process at half-resolution for performance; CSS upscales smoothly.
    const SCALE = 0.55;

    const tick = () => {
      if (cancelled) return;
      if (video.readyState >= 2 && video.videoWidth > 0) {
        const w = Math.round(video.videoWidth * SCALE);
        const h = Math.round(video.videoHeight * SCALE);
        if (canvas.width !== w) canvas.width = w;
        if (canvas.height !== h) canvas.height = h;

        ctx.drawImage(video, 0, 0, w, h);
        const frame = ctx.getImageData(0, 0, w, h);
        const d = frame.data;

        // Chroma key: green is transparent. Edges fall off softly to avoid
        // hard pixelation. Despill subtracts excess green from kept pixels.
        for (let i = 0; i < d.length; i += 4) {
          const r = d[i];
          const g = d[i + 1];
          const b = d[i + 2];

          // How "greenish" the pixel is, beyond the average of R and B.
          const greenness = g - (r + b) * 0.5;

          if (greenness > 60) {
            // Strongly green → fully transparent
            d[i + 3] = 0;
          } else if (greenness > 10) {
            // Edge zone → soft alpha taper
            const t = (greenness - 10) / 50; // 0..1
            d[i + 3] = Math.round(255 * (1 - t));
            // Despill: clamp the green channel to neighbour brightness
            d[i + 1] = Math.min(g, Math.round((r + b) / 2 + 8));
          } else if (g > r && g > b) {
            // Mild green tint — leave alpha alone, but despill slightly
            d[i + 1] = Math.min(g, Math.round((r + b) / 2 + 12));
          }
        }

        ctx.putImageData(frame, 0, 0);
      }
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (raf === 0) raf = requestAnimationFrame(tick);
    };

    video.addEventListener("playing", start);
    video.addEventListener("loadeddata", start);

    // Some Safari versions need a user-gesture–free play kick after mount
    video.play().catch(() => {
      // If autoplay fails, the playing/loadeddata listeners will still run.
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      video.removeEventListener("playing", start);
      video.removeEventListener("loadeddata", start);
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          opacity: 0,
          pointerEvents: "none",
        }}
        aria-hidden
      />
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "220%",
          height: "auto",
          aspectRatio: "16/9",
          maxWidth: "none",
          transform: "translate(-50%, -50%)",
          display: "block",
          pointerEvents: "none",
        }}
        aria-hidden
      />
    </>
  );
};

// ── Main component ──────────────────────────────────────────────────────────

const HeroPhoneVideo: React.FC = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const isSafari = React.useMemo(detectIsSafari, []);

  return (
    <div
      className="relative w-full"
      style={{ aspectRatio: "16/9", overflow: "visible" }}
    >
      {isSafari ? (
        <CanvasChromaKeyVideo
          src={`${baseUrl}videos/hero-phone-source.mp4`}
        />
      ) : (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: "220%",
            maxWidth: "none",
            height: "auto",
            transform: "translate(-50%, -50%)",
            display: "block",
            pointerEvents: "none",
          }}
        >
          <source
            src={`${baseUrl}videos/hero-phone.webm`}
            type='video/webm; codecs="vp9"'
          />
        </video>
      )}
    </div>
  );
};

export default HeroPhoneVideo;
