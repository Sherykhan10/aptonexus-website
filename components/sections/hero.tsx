import { home } from "@/content/pages";
import { services } from "@/content/services";
import { HeroMedia } from "@/components/media/hero-media";
export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="w-[55%] max-w-[58%] md:w-auto md:max-w-none relative z-10">
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
          <p className="hero-description">{home.description}</p>
          <div className="hero-actions-row">
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
