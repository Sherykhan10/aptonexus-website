"use client";
import { useEffect, useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Icon } from "@/components/ui/icon";
import { contactOptions } from "@/lib/contact";
export function ContactOptions() {
  return (
    <div className="contact-options">
      {contactOptions().map((option) => (
        <a
          key={option.id}
          href={option.href}
          target={option.external ? "_blank" : undefined}
          rel={option.external ? "noopener noreferrer" : undefined}
          data-contact-channel={option.id}
          className="contact-option"
        >
          <Icon name={option.icon} />
          <span>
            <strong>{option.title}</strong>
            <small>{option.detail}</small>
          </span>
          <Icon name="diagonal" />
        </a>
      ))}
    </div>
  );
}
export function ContactLauncher() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const target = (event.target as Element).closest(
        "[data-contact-trigger]",
      );
      if (
        !target ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      event.preventDefault();
      setOpen(true);
    };
    document.addEventListener("click", listener);
    return () => document.removeEventListener("click", listener);
  }, []);
  return (
    <Dialog open={open} onClose={() => setOpen(false)} titleId="contact-title">
      <p className="eyebrow lime">LET’S BUILD SOMETHING USEFUL</p>
      <h2 id="contact-title">Start a conversation.</h2>
      <p className="dialog-description">
        Tell us what you’re trying to automate, build, or improve.
      </p>
      <ContactOptions />
      <p className="small muted">
        A little context goes a long way. Share your workflow, the tools
        involved, and the outcome you have in mind.
      </p>
    </Dialog>
  );
}
