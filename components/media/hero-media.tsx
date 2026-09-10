"use client";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { VideoPlayer } from "./video-player";
export function HeroMedia() {
  const video = useRef<HTMLVideoElement>(null);
  const [allowed, setAllowed] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const size = matchMedia("(max-width: 1099px)");
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const update = () => {
      setAllowed(!motion.matches && !connection?.saveData);
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
    if (!video.current) return;
    if (paused) video.current.pause();
    else if (allowed) void video.current.play().catch(() => setFailed(true));
  }, [paused, allowed, mobile]);
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
          autoPlay={!paused}
          muted
          playsInline
          loop
          preload="none"
          poster={
            mobile
              ? site.brand.heroLoop.mobilePoster
              : site.brand.heroLoop.poster
          }
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
      <div className="hero-media-controls right-4 bottom-4 md:right-9 md:bottom-8 z-20">
        <VideoPlayer
          compact
          label="Watch Video"
          src={site.brand.film.mp4}
          poster={site.brand.film.poster}
          title="the brand film"
          description="AptoNexus brand artwork: an animated robot on a black and lime stage, followed by the AptoNexus logo."
        />
        {allowed && !failed && (
          <button
            className="motion-toggle"
            aria-label={
              paused ? "Resume background motion" : "Pause background motion"
            }
            title={
              paused ? "Resume background motion" : "Pause background motion"
            }
            onClick={() => setPaused(!paused)}
          >
            <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
          </button>
        )}
      </div>
    </div>
  );
}
