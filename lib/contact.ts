import { site } from "@/content/site";
export function contactOptions() {
  const { email, whatsapp, calendar } = site.contact;
  return [
    ...(whatsapp.enabled
      ? [
          {
            id: "whatsapp",
            title: "Chat on WhatsApp",
            detail: whatsapp.displayNumber,
            href: `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.message)}`,
            icon: "chat",
            external: true,
          },
        ]
      : []),
    ...(email.enabled
      ? [
          {
            id: "email",
            title: "Send an email",
            detail: email.address,
            href: `mailto:${email.address}`,
            icon: "email",
            external: false,
          },
        ]
      : []),
    ...(calendar.enabled
      ? [
          {
            id: "calendar",
            title: "Book a conversation",
            detail: "Choose a time that works for you",
            href: calendar.url,
            icon: "diagonal",
            external: true,
          },
        ]
      : []),
  ];
}
