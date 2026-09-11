"use client";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

export function HeroMedia() {
  const video = useRef<HTMLVideoElement>(null);
  const [allowed, setAllowed] = useState(true);
  const [mobile, setMobile] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const size = matchMedia("(max-width: 1099px)");
    const update = () => {
      setAllowed(!motion.matches);
      setMobile(size.matches);
    };
    update();
    motion.addEventListener("change", update);
    size.addEventListener("change", update);
    return () => {
      motion.removeEventListener("change", update);
      size.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const el = video.current;
    if (!el) return;
    el.muted = true;
    el.defaultMuted = true;
    if (allowed) {
      void el.play().catch((err) => {
        console.warn("Autoplay deferred:", err);
      });
    }
  }, [allowed, mobile]);

  return (
    <div className="hero-media">
      <picture
        style={{ visibility: allowed && !failed ? "hidden" : "visible" }}
      >
        <source
          media="(max-width: 1099px)"
          srcSet={site.brand.heroLoop.mobilePoster}
        />
        {/* Native picture selects the matching art direction before hydration. */}
        <img
          src={site.brand.heroLoop.poster}
          alt="Friendly white AptoNexus robot gesturing in a soft sage environment"
          width="1280"
          height="720"
          fetchPriority="high"
        />
      </picture>
      {allowed && !failed && (
        <video
          key={mobile ? "mobile" : "desktop"}
          ref={video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={
            mobile
              ? site.brand.heroLoop.mobilePoster
              : site.brand.heroLoop.poster
          }
          onCanPlay={(e) => {
            const target = e.currentTarget;
            target.muted = true;
            target.play().catch(() => {});
          }}
          onError={() => setFailed(true)}
          aria-hidden="true"
        >
          <source
            src={mobile ? site.brand.heroLoop.mobile : site.brand.heroLoop.mp4}
            type="video/mp4"
            onError={() => setFailed(true)}
          />
        </video>
      )}
      <div className="hero-media-shade" />
    </div>
  );
}
