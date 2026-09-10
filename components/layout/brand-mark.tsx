import Image from "next/image";
import { site } from "@/content/site";

export function BrandMark({ priority = false }: { priority?: boolean }) {
  return (
    <span className="brand-mark">
      <Image
        src={site.brand.mark}
        alt=""
        width={60}
        height={44}
        priority={priority}
      />
    </span>
  );
}
