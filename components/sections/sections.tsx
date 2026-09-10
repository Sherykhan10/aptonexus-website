import Link from "next/link";
import { services } from "@/content/services";
import {
  home,
  frictionToFlow,
  process,
  principles,
  faqs,
} from "@/content/pages";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
export function SectionHeading({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{label}</p>
        <h2>{title.replaceAll("\\n", "\n")}</h2>
      </div>
      {text && <p>{text}</p>}
    </div>
  );
}
export function Capabilities() {
  return (
    <section id="capabilities" className="capabilities">
      <div className="container">
        <div className="capability-strip">
          {services.map((s, i) => (
            <Link key={s.slug} href={`/services#${s.slug}`}>
              <span>0{i + 1}</span>
              {s.title.replace("Web & Mobile ", "")}
              <Icon name="diagonal" />
            </Link>
          ))}
        </div>
        <div className="intro section capability-intro">
          <p className="eyebrow">BUILT FOR THE WAY YOU WORK</p>
          <div>
            <h2>{home.intro}</h2>
            <p className="lead">{home.introDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export function ServicesSection({ full = false }: { full?: boolean }) {
  const techIcons = ["chip", "gear", "code", "link"];

  const techTags = [
    ["LLM", "NLP", "Chat"],
    ["APIs", "Integrations", "Flows"],
    ["Web", "Mobile", "AI"],
    ["APIs", "Connectors", "Data"],
  ];
  if (!full)
    return (
      <section className="section container capability-section" id="services">
        <div className="section-header-flowforge text-center md:text-left flex flex-col items-center md:items-start mx-auto md:mx-0">
          <p className="flowforge-eyebrow">OUR TECHNOLOGY</p>
          <h2 className="flowforge-heading">
            Good technology
            <br />
            gets out of your way.
          </h2>
        </div>
        <div className="tech-cards-grid">
          {services.map((service, index) => (
            <Reveal key={service.slug}>
              {/* Card wrapper: relative + isolate for clean stacking */}
              <div className="layered-card-wrapper group">
                {/* Neon green accent — bottom-right corner */}
                <div className="layered-card-green" />
                {/* Purple depth layer — offset down-left */}
                <div className="layered-card-purple" />
                {/* Main dark card */}
                <article className="layered-card-main">
                  <h3>
                    <Link href={`/services#${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>
                  <p>{service.description}</p>
                  <div className="tech-tags-row">
                    {techTags[index % techTags.length].map((tag) => (
                      <span key={tag} className="tech-pill-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    );
  return (
    <section className="services-section section container" id="services">
      <SectionHeading
        label="01 / WHAT WE BUILD"
        title="Four capabilities.\nOne connected business."
        text="The right combination of AI, automation, and software to move your business forward."
      />
      <div className="service-list">
        {services.map((s, i) => (
          <Reveal key={s.slug}>
            <article id={s.slug} className="service-row">
              <span className="service-number">0{i + 1}</span>
              <div className="service-icon">
                <Icon name={techIcons[i % techIcons.length]} />
              </div>
              <h3>{s.title}</h3>
              <div>
                <p>{s.description}</p>
                {full && (
                  <a className="text-link" href="/contact" data-contact-trigger>
                    Discuss your project
                    <Icon name="diagonal" />
                  </a>
                )}
              </div>
              <a
                className="service-arrow"
                href={full ? "/contact" : `/services#${s.slug}`}
                data-contact-trigger={full || undefined}
                aria-label={full ? `Discuss ${s.title}` : `Explore ${s.title}`}
              >
                <Icon name="diagonal" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>

    </section>
  );
}

export function Outcomes() {
  return (
    <section className="friction-section section" id="friction">
      <div className="container friction-container-split">
        <div className="friction-left-col text-center md:text-left flex flex-col items-center md:items-start mx-auto md:mx-0">
          <h2>
            Where<br />Work<br />Gets<br />Stuck.
          </h2>
          <p className="text-center md:text-left mx-auto md:mx-0">The friction slowing down your business growth.</p>
        </div>
        <div className="friction-right-col">
          {frictionToFlow.map((row) => (
            <Reveal key={row.friction}>
              <div className="friction-problem-row">
                <div className="friction-check-circle">
                  <svg className="friction-check-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="friction-problem-text">
                  <strong>{row.friction}</strong>{" "}{row.response}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


export function ProcessSection() {
  return (
    <section className="section container process-section-flowforge" id="process">
      <div className="process-header-flowforge">
        <h2>Our process. Your success.</h2>
        <p>From discovery to deployment, we make it simple.</p>
      </div>
      <div className="process-columns-grid">
        {process.map((p, i) => (
          <div key={p.title} className="process-card-wrapper">
            {/* Main dark card */}
            <div className="process-card-inner">
              <span className="process-step-num">{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Principles() {
  return (
    <section className="section container">
      <SectionHeading
        label="06 / WHY APTONEXUS"
        title="Built with purpose.\nGrounded in your business."
      />
      <div className="principle-grid">
        {principles.map((p, i) => (
          <article key={p.title}>
            <span className="small muted">0{i + 1} /</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section className="faq-section-flowforge" id="faq">
      <div className="section container faq-grid-split">
        <div className="faq-left-col">
          <h2>Frequently asked questions.</h2>
          <p>Everything you need to know, all in one place.</p>
        </div>
        <div className="faq-right-col">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item-row">
              <summary>
                <span>{faq.question}</span>
                <span className="faq-toggle-arrow" aria-hidden="true">→</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="cta-section-wrapper">
      <div className="container">
        {/* Layered wrapper: dark ::before shadow + lime ::after accent */}
        <div className="cta-card-wrapper">
          {/* Purple main card */}
          <div className="cta-banner-flowforge">
            <div className="cta-banner-copy">
              <h2>Ready to build something great?</h2>
              <p>
                Bring us the bottleneck, the idea, or the process that could work better.
              </p>
            </div>
            <a href="/contact" data-contact-trigger className="cta-banner-btn">
              Get Started
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export function PageHero({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow lime">{label}</p>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
      </div>
    </section>
  );
}
