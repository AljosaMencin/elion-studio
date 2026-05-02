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

const HeroPhoneVideo: React.FC = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const isSafari = React.useMemo(detectIsSafari, []);

  return (
    <div
      className="relative w-full"
      style={{ aspectRatio: "16/9", overflow: "visible" }}
    >
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
          // Safari fallback: video has a flat black bg (no alpha). `lighten`
          // makes pure-black pixels invisible against the page's indigo
          // backdrop while keeping the phone's bright pixels visible.
          mixBlendMode: isSafari ? "lighten" : undefined,
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
