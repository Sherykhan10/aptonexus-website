"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import type { Project } from "@/content/projects";

/** Robust cover image supporting both WebP and JPG with automatic fallback */
function CoverImg({ src, alt }: { src: string; alt: string }) {
  const webpSrc = src.replace(/\.(jpg|jpeg|webp)$/i, ".webp");
  const jpgSrc = src.replace(/\.(jpg|jpeg|webp)$/i, ".jpg");

  return (
    <picture style={{ width: "100%", height: "100%", display: "block" }}>
      <source srcSet={webpSrc} type="image/webp" />
      <source srcSet={jpgSrc} type="image/jpeg" />
      <img
        src={webpSrc}
        alt={alt}
        width={320}
        height={180}
        loading="lazy"
        decoding="async"
        onError={(e) => {
          const target = e.currentTarget;
          if (!target.src.endsWith(".jpg")) {
            target.src = jpgSrc;
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </picture>
  );
}

function DemoCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className="demo-card-wrapper group" data-card-index={index}>
      {/* Neon green accent — bottom-right corner */}
      <div className="demo-card-green" />
      {/* Purple depth layer — offset down-left */}
      <div className="demo-card-purple" />
      {/* Main dark card */}
      <article className="demo-card-main">
        {/* Image / cover area */}
        <Link
          href={`/work/${project.slug}`}
          className="demo-card-cover"
          tabIndex={-1}
          aria-hidden="true"
        >
          {/* Badge */}
          <span className="demo-card-badge">
            {String(index + 1).padStart(2, "0")} / DEMONSTRATION
          </span>
          {project.cover ? (
            <CoverImg
              src={project.cover}
              alt={`${project.title} workflow demonstration`}
            />
          ) : (
            <div className="demo-card-cover-placeholder" />
          )}
        </Link>
        {/* Text content */}
        <div className="demo-card-copy">
          <h3>
            <Link href={`/work/${project.slug}`}>{project.title}</Link>
          </h3>
          <p>{project.shortDescription}</p>
          <Link href={`/work/${project.slug}`} className="demo-card-cta">
            View case study <span aria-hidden="true">→</span>
          </Link>
        </div>
      </article>
    </div>
  );
}

export function SelectedWorkCarousel({ projects }: { projects: Project[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Smooth scroll to selected card
  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>(
      ".demo-card-wrapper[data-card-index]"
    );
    if (cards[index]) {
      const card = cards[index];
      const containerWidth = container.offsetWidth;
      const cardLeft = card.offsetLeft;
      const cardWidth = card.offsetWidth;
      const targetScroll = cardLeft - (containerWidth - cardWidth) / 2;
      container.scrollTo({ left: targetScroll, behavior: "smooth" });
      setActiveIndex(index);
    }
  }, []);

  // Listen to manual scrolling / swiping on mobile
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const cards = container.querySelectorAll<HTMLElement>(
            ".demo-card-wrapper[data-card-index]"
          );
          if (cards.length > 0) {
            const containerCenter =
              container.scrollLeft + container.offsetWidth / 2;
            let closestIdx = 0;
            let minDiff = Infinity;

            cards.forEach((card, idx) => {
              if (idx < projects.length) {
                const cardCenter = card.offsetLeft + card.offsetWidth / 2;
                const diff = Math.abs(containerCenter - cardCenter);
                if (diff < minDiff) {
                  minDiff = diff;
                  closestIdx = idx;
                }
              }
            });

            setActiveIndex(closestIdx);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [projects.length]);

  return (
    <div className="w-full">
      <div ref={scrollRef} className="demo-marquee-outer">
        <div className="demo-marquee-track animate-marquee hover:[animation-play-state:paused]">
          {/* Primary set (always visible, interactive swipe on mobile) */}
          {projects.map((project, index) => (
            <DemoCard
              key={`a-${project.slug}`}
              project={project}
              index={index}
            />
          ))}
          {/* Duplicate set for seamless infinite CSS loop on desktop, hidden on mobile */}
          <div className="hidden md:flex items-center gap-10">
            {projects.map((project, index) => (
              <DemoCard
                key={`b-${project.slug}`}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Swipe Navigation Controls */}
      <div className="md:hidden flex flex-col items-center gap-3 pt-3">
        <div className="demo-carousel-controls">
          <button
            type="button"
            className="demo-carousel-arrow"
            onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            aria-label="Previous project"
          >
            ←
          </button>
          <div
            className="demo-carousel-dots"
            role="tablist"
            aria-label="Project slides"
          >
            {projects.map((p, idx) => (
              <button
                key={p.slug}
                type="button"
                className={`demo-carousel-dot ${
                  idx === activeIndex ? "active" : ""
                }`}
                onClick={() => scrollToIndex(idx)}
                aria-label={`Go to project ${idx + 1}: ${p.title}`}
                aria-selected={idx === activeIndex}
                role="tab"
              />
            ))}
          </div>
          <button
            type="button"
            className="demo-carousel-arrow"
            onClick={() =>
              scrollToIndex(Math.min(projects.length - 1, activeIndex + 1))
            }
            disabled={activeIndex === projects.length - 1}
            aria-label="Next project"
          >
            →
          </button>
        </div>
        <p className="text-xs text-slate-400 font-medium tracking-wide flex items-center gap-1.5">
          <span>←</span>
          <span>Swipe cards to explore</span>
          <span>→</span>
        </p>
      </div>
    </div>
  );
}
