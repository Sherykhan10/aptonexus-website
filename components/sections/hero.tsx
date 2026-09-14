import { home } from "@/content/pages";
import { services } from "@/content/services";
import { HeroMedia } from "@/components/media/hero-media";
export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content flex flex-col justify-center">
        <div className="w-[56%] max-w-[58%] sm:w-[58%] md:w-auto md:max-w-none z-10 flex flex-col justify-center">
          <p className="hero-eyebrow-tag">
            AI • AUTOMATION • INNOVATION
          </p>
          <h1 className="hero-title">
            Automate the{" "}
            <br className="block md:hidden" />
            work.
            <br className="hidden md:block" />{" "}
            Accelerate{" "}
            <br className="block md:hidden" />
            the{" "}
            <span className="hero-title-accent">{home.heading[2]}</span>
          </h1>
          <p className="hero-description hidden md:block">{home.description}</p>
          <div className="hero-actions-row hidden md:flex">
            <a className="hero-btn-primary" href="/contact" data-contact-trigger>
              Start a Project
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="hero-capabilities">
          {services.map((service) => (
            <span key={service.slug}>
              {service.title.replace("Web & Mobile ", "")}
            </span>
          ))}
        </div>
      </div>
      {/* Mobile CTA Button positioned at the absolute bottom of the Hero section */}
      <div className="hero-actions-row-mobile md:hidden absolute bottom-5 left-4 z-25">
        <a className="hero-btn-primary" href="/contact" data-contact-trigger>
          Start a Project
          <span aria-hidden="true">→</span>
        </a>
      </div>
      <HeroMedia />
      <div className="container hero-bottom">
        <span>INTELLIGENCE, PUT TO WORK.</span>
        <a href="#capabilities">
          SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
