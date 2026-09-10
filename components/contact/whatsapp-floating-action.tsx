import { contactOptions } from "@/lib/contact";
import { site } from "@/content/site";

export function WhatsAppFloatingAction() {
  const channel = contactOptions().find((option) => option.id === "whatsapp");
  if (!channel) return null;
  return (
    <a
      className="whatsapp-floating"
      href={channel.href}
      target="_blank"
      rel="noopener noreferrer"
      data-contact-channel="whatsapp"
      aria-label={`Chat with ${site.name} on WhatsApp`}
    >
      <svg
        viewBox="0 0 24 24"
        width="27"
        height="27"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.91 11.91 0 0 0 12.04 0C5.46 0 .1 5.35.1 11.93c0 2.1.55 4.16 1.6 5.97L0 24l6.26-1.64a11.93 11.93 0 0 0 5.78 1.47h.01C18.63 23.83 24 18.48 24 11.9c0-3.19-1.24-6.18-3.48-8.42ZM12.05 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.72.98.99-3.63-.24-.38a9.87 9.87 0 0 1-1.52-5.24c0-5.47 4.46-9.93 9.94-9.93a9.87 9.87 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.47 9.87-9.96 9.87Zm5.45-7.42c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.26.5 1.7.64.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
      <span>Chat on WhatsApp</span>
    </a>
  );
}
