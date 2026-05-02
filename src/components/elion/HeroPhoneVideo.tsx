import React from "react";

// Hero visual — looping rotating phone reveal.
//
// Two source files are produced from the same green-screen master:
//   • hero-phone.webm — VP9 with alpha channel (yuva420p). True transparency.
//     Used by Chrome, Edge, Firefox, and most Android browsers.
//   • hero-phone.mp4  — H.264 with the phone composited onto the page's dark
//     background colour. Used by Safari, which does not support VP9 alpha.
//
// We pick the source at runtime via UA detection rather than `<source>`
// ordering, because Safari *can* decode VP9 WebM but silently drops the alpha
// channel, which would expose the underlying green-tinted YUV pixels.
//
// autoPlay requires `muted` and `playsInline` on iOS/iPadOS.

const detectIsSafari = (): boolean => {
  if (typeof window === "undefined") return false;
  const ua = window.navigator.userAgent;
  return /Safari/.test(ua) && !/Chrome|Chromium|Edg|OPR|Brave/.test(ua);
};

// SVG filter that masks dark pixels to transparent at render time. Used as a
// runtime chroma-key for the Safari MP4 fallback, since H.264 doesn't carry
// alpha and the encoded "black" composite background actually reads as a
// faint brown after Safari's YUV→RGB conversion.
const HeroVideoMaskDef: React.FC = () => (
  <svg
    aria-hidden
    style={{ position: "absolute", width: 0, height: 0 }}
    focusable={false}
  >
    <filter id="hero-phone-darkkey" colorInterpolationFilters="sRGB">
      {/*
        Sets per-pixel alpha to a function of luminance.
        Last row: A = 4*R + 4*G + 4*B - 0.6
          • R=G=B≈0.05 (encoded "black") → A ≈ 0   (transparent)
          • R=G=B≈0.15 (faint glow)      → A ≈ 1.2 → 1 (opaque)
        Result: dark composite bg disappears, phone keeps its highlights.
      */}
      <feColorMatrix
        type="matrix"
        values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                4 4 4 0 -0.6"
      />
    </filter>
  </svg>
);

const HeroPhoneVideo: React.FC = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const isSafari = React.useMemo(detectIsSafari, []);

  return (
    <div
      className="relative w-full"
      style={{ aspectRatio: "16/9", overflow: "visible" }}
    >
      {isSafari && <HeroVideoMaskDef />}
      <video
        key={isSafari ? "mp4" : "webm"}
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
          // Safari fallback: H.264 has no alpha and Safari's YUV→RGB
          // conversion gives "black" a faint brown tint. The SVG filter
          // remaps low-luminance pixels to transparent so only the phone
          // (bright pixels) renders.
          filter: isSafari ? "url(#hero-phone-darkkey)" : undefined,
        }}
      >
        {isSafari ? (
          <source
            src={`${baseUrl}videos/hero-phone.mp4`}
            type="video/mp4"
          />
        ) : (
          <source
            src={`${baseUrl}videos/hero-phone.webm`}
            type='video/webm; codecs="vp9"'
          />
        )}
      </video>
    </div>
  );
};

export default HeroPhoneVideo;
