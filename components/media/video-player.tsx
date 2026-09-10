"use client";
import { useId, useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Icon } from "@/components/ui/icon";
import { MediaImage } from "./media-image";
export function VideoPlayer({
  src,
  poster,
  title,
  description,
  captions,
  compact = false,
  label,
}: {
  src: string;
  poster?: string;
  title: string;
  description: string;
  captions?: string;
  compact?: boolean;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const [failed, setFailed] = useState(false);
  const id = useId();
  return (
    <>
      <button
        className={compact ? "brand-film-trigger" : "video-launch"}
        aria-label={`Watch ${title}`}
        onClick={() => setOpen(true)}
      >
        {!compact && <MediaImage src={poster} alt="" />}
        <span className={compact ? "film-play-icon" : "play-circle"}>
          <Icon name="play" />
        </span>
        <span className="video-launch-label">
          {label ?? (compact ? "Watch Video" : `Watch ${title}`)}
        </span>
      </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        titleId={`${id}-title`}
        className="video-dialog"
      >
        <h2 id={`${id}-title`}>{title}</h2>
        <video
          controls
          playsInline
          preload="metadata"
          poster={poster}
          onError={() => setFailed(true)}
          aria-describedby={`${id}-description`}
        >
          <source src={src} type="video/mp4" onError={() => setFailed(true)} />
          {captions && (
            <track
              kind="captions"
              src={captions}
              srcLang="en"
              label="English"
              default
            />
          )}
          Your browser does not support this video.
        </video>
        {failed && (
          <p role="status">
            The video could not play here.{" "}
            <a className="text-link" href={src}>
              Open the video directly ↗
            </a>
          </p>
        )}
        <p id={`${id}-description`} className="small muted">
          {description}
        </p>
      </Dialog>
    </>
  );
}
