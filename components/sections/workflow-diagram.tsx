"use client";
import { useState, Fragment } from "react";
import { workflow } from "@/content/pages";
import { Icon } from "@/components/ui/icon";
export function WorkflowDiagram() {
  const [active, setActive] = useState(0);

  const flowCards = [
    {
      step: 1,
      title: "Your Tools",
      text: "Connect your existing systems, inboxes, and data.",
      icon: "database",
      isCheck: true,
    },
    {
      step: 2,
      title: "AI Agents",
      text: "Understand context, qualify, and take configured action.",
      icon: "spark",
      isCheck: true,
    },
    {
      step: 3,
      title: "Automation",
      text: "Streamline your workflows and reduce manual tasks.",
      icon: "check",
      isCheck: true,
    },
    {
      step: 4,
      title: "Apps",
      text: "Build and deploy scalable, intelligent applications.",
      icon: "code",
      isCheck: true,
    },
    {
      step: 5,
      title: "Better Results",
      text: "Save time, eliminate errors, and scale faster.",
      icon: "check",
      isCheck: true,
    },
  ];

  return (
    <section className="workflow-section section" id="workflow">
      <div className="container">
        <div className="flowforge-section-header">
          <p className="flowforge-eyebrow">COLLABORATION</p>
          <h2 className="flowforge-heading">
            Not just connected.
            <br />
            Working together.
          </h2>
        </div>

        {/* Mobile: Continuous Auto-scrolling Marquee */}
        <div className="md:hidden flex overflow-hidden relative w-full py-2">
          {/* Edge gradient fade masks */}
          <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-8 bg-linear-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-8 bg-linear-to-l from-white to-transparent z-10" />

          {/* Marquee Track */}
          <div className="flex w-max items-center animate-marquee-workflow hover:[animation-play-state:paused] py-3 gap-3">
            {/* Set 1 */}
            {flowCards.map((card) => (
              <Fragment key={`m1-${card.title}`}>
                <div className="w-60 shrink-0 p-5 bg-white border border-slate-200 rounded-2xl flex flex-col items-center text-center shadow-xs">
                  <div
                    className={`flowforge-card-icon-circle ${
                      card.isCheck ? "icon-green" : "icon-purple"
                    } mb-3`}
                  >
                    <Icon name={card.icon} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Step 0{card.step}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{card.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{card.text}</p>
                </div>
                <div
                  className="shrink-0 flex items-center justify-center px-1 text-slate-400"
                  aria-hidden="true"
                >
                  <Icon name="arrow" className="w-4 h-4 text-slate-400" />
                </div>
              </Fragment>
            ))}
            {/* Set 2 for seamless infinite loop */}
            {flowCards.map((card) => (
              <Fragment key={`m2-${card.title}`}>
                <div className="w-60 shrink-0 p-5 bg-white border border-slate-200 rounded-2xl flex flex-col items-center text-center shadow-xs">
                  <div
                    className={`flowforge-card-icon-circle ${
                      card.isCheck ? "icon-green" : "icon-purple"
                    } mb-3`}
                  >
                    <Icon name={card.icon} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Step 0{card.step}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{card.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{card.text}</p>
                </div>
                <div
                  className="shrink-0 flex items-center justify-center px-1 text-slate-400"
                  aria-hidden="true"
                >
                  <Icon name="arrow" className="w-4 h-4 text-slate-400" />
                </div>
              </Fragment>
            ))}
          </div>
        </div>

        {/* Desktop: Connected Interactive Chain */}
        <div className="flowforge-workflow-row hidden md:flex items-center justify-between gap-2 md:gap-3 max-w-300 mx-auto w-full">
          {flowCards.map((card, i) => {
            const isActive = active === i;
            return (
              <Fragment key={card.title}>
                <button
                  type="button"
                  className={`flowforge-workflow-card w-full max-w-90 md:max-w-none md:w-auto md:flex-1 mx-auto md:mx-0 ${
                    isActive ? "active-purple" : ""
                  }`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-pressed={isActive}
                >
                  <div
                    className={`flowforge-card-icon-circle ${
                      isActive
                        ? "icon-purple"
                        : card.isCheck
                        ? "icon-green"
                        : "icon-neutral"
                    }`}
                  >
                    <Icon name={card.icon} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </button>
                {i < flowCards.length - 1 && (
                  <div
                    className="flowforge-card-arrow-wrapper flex items-center justify-center py-2 md:py-0 px-0 md:px-1 shrink-0"
                    aria-hidden="true"
                  >
                    <span className="flowforge-card-arrow inline-flex items-center justify-center text-slate-400">
                      <Icon
                        name="arrow"
                        className="w-5 h-5 rotate-90 md:rotate-0 transition-transform duration-200"
                      />
                    </span>
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>

        {workflow[active] && (
          <div className="flowforge-workflow-detail-strip hidden md:flex">
            <span className="detail-tag">
              0{active + 1} / {workflow[active].kind}
            </span>
            <p>
              <strong>{workflow[active].title}:</strong> {workflow[active].text}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
