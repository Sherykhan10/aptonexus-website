export interface Service {
  slug: string;
  title: string;
  description: string;
  outcome: string;
  capabilities: string[];
}

export const services: Service[] = [
  {
    slug: "ai-agents-chatbots",
    outcome:
      "Text and voice agents that answer, qualify requests, and take configured actions.",
    capabilities: [
      "Knowledge Agents",
      "Lead Qualification",
      "Customer Support",
      "Voice & Text",
    ],
    title: "AI Agents & Chatbots",
    description:
      "Custom 24/7 agents trained on business knowledge for inquiries, lead qualification, customer support, text/voice interactions and related actions.",
  },
  {
    slug: "workflow-automation",
    outcome: "Connect tools and move repetitive work automatically.",
    capabilities: [
      "Data Routing",
      "Task Automation",
      "System Handoffs",
      "Operational Workflows",
    ],
    title: "Workflow Automation",
    description:
      "End-to-end business automations connecting tools and reducing repetitive manual work and operational bottlenecks.",
  },
  {
    slug: "ai-powered-web-mobile-apps",
    outcome:
      "Custom web and mobile products with AI built into the core experience.",
    capabilities: [
      "Custom Interfaces",
      "AI Features",
      "Full-Stack Development",
      "Deployment",
    ],
    title: "AI-Powered Web & Mobile Apps",
    description:
      "Full-stack applications with AI functionality designed into the product.",
  },
  {
    slug: "custom-integrations",
    outcome:
      "Connect AI and automation to the systems your business already uses.",
    capabilities: ["APIs", "Webhooks", "CRM / ERP", "Proprietary Systems"],
    title: "Custom Integrations",
    description:
      "AI capabilities, APIs, webhooks and automation pipelines integrated into CRMs, ERPs, inboxes, proprietary applications and existing business systems.",
  },
];
