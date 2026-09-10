export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
export const home = {
  eyebrow: "AI AUTOMATION / CUSTOM SOFTWARE",
  heading: ["Automate the work.", "Accelerate the", "Business."],
  description:
    "AI agents, connected workflows, and custom software. Built around the way your business actually operates.",
  intro: "Good technology gets out of your way.",
  introDescription:
    "We connect intelligence with execution. From a single repetitive task to the software behind your operations, we build systems that help your business move forward.",
};
export const outcomes = [
  {
    title: "Respond beyond office hours.",
    text: "Give customers a way to get answers and share what they need when your team is unavailable.",
    label: "FASTER RESPONSE",
  },
  {
    title: "Make room for meaningful work.",
    text: "Move routine information and tasks between systems so your team can focus on the decisions that need them.",
    label: "LESS MANUAL WORK",
  },
  {
    title: "Keep operations connected.",
    text: "Bring disconnected tools into a considered flow, with information available where it is needed.",
    label: "CONNECTED SYSTEMS",
  },
  {
    title: "Build for what comes next.",
    text: "Shape custom software around evolving processes, instead of working around the limits of disconnected tools.",
    label: "ROOM TO GROW",
  },
];
export const process = [
  {
    title: "Discover",
    text: "Start with your business. Understand the workflow, the friction, the systems you use, and what a useful result looks like.",
    detail: "Business context / Workflow review / Scope",
  },
  {
    title: "Design",
    text: "Map the architecture, information flow, integrations, and points where a person should stay in control.",
    detail: "System architecture / Integration map / Human handoffs",
  },
  {
    title: "Build",
    text: "Develop the agent, automation, application, or integration around the agreed workflow.",
    detail: "Development / Connected tools / Working iterations",
  },
  {
    title: "Test & integrate",
    text: "Check normal paths, edge cases, and system connections against the intended behavior before launch.",
    detail: "Workflow testing / Edge cases / Validation",
  },
  {
    title: "Launch & improve",
    text: "Put the system into use, review how it performs, and refine it around real operating needs.",
    detail: "Deployment / Feedback / Refinement",
  },
];
export const principles = [
  {
    title: "Your workflow comes first.",
    text: "The business problem shapes the system. We do not force every company into the same automation.",
  },
  {
    title: "AI meets software engineering.",
    text: "An agent can be one part of a larger product. Custom software connects the experience from end to end.",
  },
  {
    title: "Work with what you already use.",
    text: "Integrate with existing tools where practical, with a clear understanding of their capabilities and constraints.",
  },
  {
    title: "Human where it matters.",
    text: "Remove repetitive work while preserving human judgment, review, and ownership at the right moments.",
  },
];
export const faqs = [
  {
    question: "What can AptoNexus automate?",
    answer:
      "We build around repeatable business workflows: handling inquiries, moving information between tools, processing documents, and connecting actions across systems. We start by identifying which parts of your workflow are suitable for automation.",
  },
  {
    question: "Can you integrate with software we already use?",
    answer:
      "Yes. Custom integrations are a core service. We review the APIs, webhooks, permissions, and constraints of your existing software before agreeing on an approach.",
  },
  {
    question: "Can an AI agent use our business knowledge?",
    answer:
      "Yes. We build custom agents around business knowledge for inquiries, lead qualification, and support. The scope includes what the agent should know, which actions it can take, and when to hand off to a person.",
  },
  {
    question: "Do you build voice agents and complete applications?",
    answer:
      "Yes. Our services include text and voice agents as well as full-stack web and mobile applications with AI designed into the product.",
  },
  {
    question: "How does a project start?",
    answer:
      "Start a conversation over WhatsApp or email. Tell us what you want to build or improve, the tools involved, and where the process gets difficult. We can then discuss the scope and next steps.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Timing depends on the workflow, integrations, data readiness, and testing needs. We discuss a realistic scope and timeline after understanding the project; there is no single timeline for every system.",
  },
  {
    question: "How do you approach company data?",
    answer:
      "Data access, permissions, provider requirements, and human review need to be considered as part of the project scope. Share a high-level description first, without passwords, API keys, or sensitive records. Any specific security or regulatory requirements should be discussed before work begins.",
  },
];
export const workflow = [
  {
    title: "Incoming request",
    kind: "TRIGGER",
    icon: "inbox",
    text: "A form submission, message, or business event starts the workflow. Define the information needed before the system moves forward.",
  },
  {
    title: "AI understanding",
    kind: "INTELLIGENCE",
    icon: "spark",
    text: "An agent interprets the request using relevant business context and extracts the information needed for the next step.",
  },
  {
    title: "Business logic",
    kind: "DECISION",
    icon: "branch",
    text: "Rules check required information and determine the next action. Ambiguous or exceptional requests can go to a person.",
  },
  {
    title: "Connected systems",
    kind: "INTEGRATION",
    icon: "database",
    text: "Approved integrations move structured information into the CRM, database, or tools used by the business.",
  },
  {
    title: "Action & handoff",
    kind: "EXECUTION",
    icon: "arrow",
    text: "Send a response, create a task, or route the request to the right person. Keep human judgment in the flow where it adds value.",
  },
];

export const frictionToFlow = [
  {
    friction: "Data entry and repetitive clicking.",
    response: "Spending hours moving information between tabs.",
  },
  {
    friction: "Disconnected software.",
    response: "Systems that don't talk to each other naturally.",
  },
  {
    friction: "Inconsistent customer service.",
    response: "Dropped leads and delayed responses outside of working hours.",
  },
  {
    friction: "Routine questions consume skilled staff time.",
    response:
      "Knowledge-driven agents handle repetitive conversations and escalate when needed.",
  },
  {
    friction: "Important systems operate in isolation.",
    response:
      "Custom integrations connect APIs, CRMs, inboxes, databases, and existing software.",
  },
];
