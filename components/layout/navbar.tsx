"use client";
import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/content/pages";
import { site } from "@/content/site";
import { Icon } from "@/components/ui/icon";
import { Dialog } from "@/components/ui/dialog";
import { ContactOptions } from "@/components/contact/contact-launcher";
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={`navbar relative z-100 ${scrolled ? "scrolled" : ""}`}>
        {/* Soft gradient fade so nav links stay legible over the white hero when transparent */}
        {!scrolled && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.18) 60%, transparent 100%)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
        )}
        <div className="container nav-inner relative z-100">
          <Link className="brand" href="/" aria-label={`${site.name} home`}>
            <BrandMark priority />
            <span>{site.name}</span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                aria-current={
                  pathname === item.href || pathname.startsWith(`${item.href}/`)
                    ? "page"
                    : undefined
                }
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            className="button primary nav-cta hidden md:inline-flex"
            href="/contact"
            data-contact-trigger
          >
            Start a Project
            <span aria-hidden="true">→</span>
          </a>
          <button
            type="button"
            className="icon-button mobile-menu relative z-9999 cursor-pointer"
            style={{
              pointerEvents: "auto",
              touchAction: "manipulation",
              color: "#0f172a",
              borderColor: "rgba(15,23,42,0.2)",
            }}
            aria-label="Open navigation"
            aria-haspopup="dialog"
            aria-expanded={open}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpen(true);
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpen(true);
            }}
          >
            <Icon name="menu" className="w-6 h-6" />
          </button>
        </div>
      </header>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        titleId="navigation-title"
        className="nav-dialog"
      >
        <h2 id="navigation-title">Explore AptoNexus</h2>
        <Link
          className="button primary drawer-cta"
          href="/contact"
          onClick={() => setOpen(false)}
        >
          Start a Project
          <Icon name="diagonal" />
        </Link>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
              <Icon name="diagonal" />
            </Link>
          ))}
        </nav>
        <ContactOptions />
      </Dialog>
    </>
  );
}
