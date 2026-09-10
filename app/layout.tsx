import { WhatsAppFloatingAction } from "@/components/contact/whatsapp-floating-action";
import type { Metadata } from "next";
import { site } from "@/content/site";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactLauncher } from "@/components/contact/contact-launcher";
import { services } from "@/content/services";
import { Space_Grotesk, Lato, Dancing_Script, Plus_Jakarta_Sans } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing-script",
  weight: ["700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.seo.title, template: `%s | ${site.name}` },
  description: site.seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "AptoNexus — Automate the work. Accelerate the business.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: ["/og.png"],
  },
  icons: {
    icon: site.brand.mark,
    apple: site.brand.mark,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" data-scroll-behavior="smooth" className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${lato.variable} ${dancingScript.variable}`}>
      <body className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${lato.variable} ${dancingScript.variable} ${spaceGrotesk.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${site.url}/#organization`,
                  name: site.name,
                  url: site.url,
                  logo: `${site.url}${site.brand.logo}`,
                  email: site.contact.email.address,
                  areaServed: site.markets.primary,
                },
                { "@type": "WebSite", name: site.name, url: site.url },
                ...services.map((service) => ({
                  "@type": "Service",
                  name: service.title,
                  description: service.description,
                  provider: { "@id": `${site.url}/#organization` },
                  url: `${site.url}/services#${service.slug}`,
                })),
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        {children}
        <Footer />
        <ContactLauncher />
        <WhatsAppFloatingAction />
      </body>
    </html>
  );
}
