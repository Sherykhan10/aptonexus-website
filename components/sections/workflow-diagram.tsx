"use client";
import { useState } from "react";
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

        <div className="flowforge-workflow-row">
          {flowCards.map((card, i) => {
            const isActive = active === i;
            return (
              <div key={card.title} className="flowforge-card-wrapper">
                <button
                  type="button"
                  className={`flowforge-workflow-card ${isActive ? "active-purple" : ""}`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-pressed={isActive}
                >
                  <div
                    className={`flowforge-card-icon-circle ${
                      isActive ? "icon-purple" : card.isCheck ? "icon-green" : "icon-neutral"
                    }`}
                  >
                    <Icon name={card.icon} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </button>
                {i < flowCards.length - 1 && (
                  <span className="flowforge-card-arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {workflow[active] && (
          <div className="flowforge-workflow-detail-strip">
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
