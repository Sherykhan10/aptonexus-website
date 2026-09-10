type CalendarConfig =
  | { enabled: false; provider: null; url: null }
  | { enabled: true; provider: "calendly" | "cal.com" | "other"; url: string };

export const site = {
  name: "AptoNexus",
  url: "https://aptonexus.com",
  business: "AI automation and custom software company / agency",
  language: "en-US",
  brand: {
    mark: "/brand/aptonexus-mark.png",
    logo: "/brand/aptonexus-logo.webp",
    logoPng: "/brand/aptonexus-logo.png",
    logoAlt: "AptoNexus AI Automation Agency",
    film: {
      mp4: "/media/aptonexus-brand-film.mp4",
      webm: "/media/aptonexus-brand-film.webm",
      poster: "/media/aptonexus-about-poster.webp",
    },
    heroLoop: {
      mobile: "/media/soft-hero-mobile.mp4",
      mobilePoster: "/media/soft-hero-mobile.webp",
      mp4: "/media/soft-hero-desktop.mp4",
      webm: "/media/aptonexus-hero-loop.webm",
      poster: "/media/soft-hero-desktop.webp",
    },
  },
  markets: {
    primary: ["United States", "United Kingdom"],
    secondary: ["Other English-speaking countries"],
  },
  seo: {
    title: "AptoNexus | AI Agents, Automation & Custom AI Software",
    description:
      "AptoNexus builds AI agents, workflow automations, AI-powered applications and custom integrations for businesses in the US, UK and beyond.",
  },
  contact: {
    email: { enabled: true, address: "contact@aptonexus.com" },
    whatsapp: {
      enabled: true,
      number: "19178312580",
      displayNumber: "+1 917 831 2580",
      message:
        "Hi AptoNexus, I'm interested in discussing an AI automation project.",
    },
    calendar: { enabled: false, provider: null, url: null } as CalendarConfig,
  },
  social: {
    linkedin: "https://linkedin.com/in/sherykhan10",
    github: "https://github.com/Sherykhan10",
    fiverr: "https://fiverr.com/sheheryar_03",
    instagram: "https://instagram.com/aptonexus.ai",
    facebook: "https://facebook.com/aptonexus",
  },
};
