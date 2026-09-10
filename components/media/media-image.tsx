"use client";
import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/ui/icon";
export function MediaImage({
  src,
  alt,
  sizes = "100vw",
}: {
  src?: string;
  alt: string;
  sizes?: string;
}) {
  const [failed, setFailed] = useState(false);
  return src && !failed ? (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      onError={() => setFailed(true)}
    />
  ) : (
    <div className="media-fallback">
      <Icon name="branch" />
      <span>Explore the project workflow below.</span>
    </div>
  );
}
