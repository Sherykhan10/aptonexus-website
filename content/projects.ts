// Evidence and editorial limitations: docs/PROJECT_DETAILS.md.
export interface Project {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description?: string;
  challenge?: string;
  solution?: string;
  workflow?: string[];
  /** Concise, evidence-backed stages for the editorial overview. */
  workflowSummary?: string[];
  technologies?: string[];
  cover?: string;
  images?: { src: string; alt: string }[];
  video?: string;
  /** Reviewed WebVTT captions for the edited public video, when available. */
  captions?: string;
  externalUrl?: string;
  featured: boolean;
  status: "draft" | "published" | "archived";
  metrics?: { label: string; value: string; source: string }[];
}

export const projects: Project[] = [
  {
    slug: "invoice-processing-automation",
    workflowSummary: [
      "PDF / Google Drive",
      "AI extraction",
      "Google Sheets",
      "Gmail confirmation",
    ],
    title: "AI Invoice Processing Automation",
    category: "Workflow Automation",
    shortDescription:
      "An invoice workflow connecting Google Drive, AI extraction, Google Sheets, and email confirmation.",
    description:
      "This recorded n8n demonstration follows a PDF invoice from a Google Drive folder through text extraction and structured field processing. The workflow appends an invoice row to Google Sheets and generates a receipt confirmation in Gmail.",
    challenge:
      "Demonstrated use case: moving invoice information from incoming PDFs into a register and acknowledgment email.",
    solution:
      "An n8n workflow connects file intake, AI-assisted field extraction, spreadsheet logging, and email generation.",
    workflow: [
      "Watch a Google Drive invoice folder and download a new PDF.",
      "Extract PDF text and process invoice fields with an AI model.",
      "Append an invoice row to Google Sheets.",
      "Generate a confirmation message and send it through Gmail.",
    ],
    technologies: ["n8n", "Google Drive", "OpenAI", "Google Sheets", "Gmail"],
    cover: "/projects/invoice-processing/cover.webp",
    images: [
      {
        src: "/projects/invoice-processing/invoice-upload.webp",
        alt: "Google Drive folder used for PDF invoice intake.",
      },
      {
        src: "/projects/invoice-processing/invoice-register.webp",
        alt: "Invoice register displayed in Google Sheets during the demonstration.",
      },
      {
        src: "/projects/invoice-processing/email-confirmation.webp",
        alt: "Invoice receipt confirmation displayed in Gmail.",
      },
    ],
    video: "/projects/invoice-processing/demo.mp4",
    externalUrl:
      "https://www.linkedin.com/posts/sherykhan10_automation-n8n-artificialintelligence-activity-7498395079804416000-DOtB/",
    featured: true,
    status: "published",
    metrics: [],
  },
  {
    slug: "linkedin-automation-agent",
    workflowSummary: [
      "Topic + audience",
      "AI copy",
      "Image generation",
      "LinkedIn publishing",
    ],
    title: "AI LinkedIn Automation Agent",
    category: "AI Agents / Workflow Automation",
    shortDescription:
      "A form-driven agent that generates post copy and an image, then publishes to LinkedIn.",
    description:
      "This n8n demonstration starts with a topic and target audience submitted through a form. Connected AI steps generate post copy and an image prompt, create an image, standardize the output, and publish a LinkedIn post. The recording then shows the resulting post on LinkedIn.",
    challenge:
      "Demonstrated use case: connecting content briefing, copywriting, image creation, and publishing in one workflow.",
    solution:
      "A form-triggered n8n agent coordinates AI generation and a LinkedIn publishing step.",
    workflow: [
      "Submit a topic and target audience through the request form.",
      "Generate post copy with an AI model and a connected Tavily search tool.",
      "Create an image prompt and generate an image.",
      "Standardize the output and publish to LinkedIn.",
      "Inspect the published post on LinkedIn.",
    ],
    technologies: ["n8n", "OpenAI", "Tavily", "LinkedIn"],
    cover: "/projects/linkedin-automation/cover.webp",
    images: [
      {
        src: "/projects/linkedin-automation/request-form.webp",
        alt: "Post request form with topic and target audience fields.",
      },
      {
        src: "/projects/linkedin-automation/generation-workflow.webp",
        alt: "n8n copy, image generation, and LinkedIn publishing workflow.",
      },
      {
        src: "/projects/linkedin-automation/published-post.webp",
        alt: "Generated copy and image displayed in a LinkedIn post.",
      },
    ],
    video: "/projects/linkedin-automation/demo.mp4",
    externalUrl:
      "https://www.linkedin.com/posts/sherykhan10_watch-how-i-built-an-ai-agent-that-automatically-activity-7496585544383037440-3ttH",
    featured: true,
    status: "published",
    metrics: [],
  },
  {
    slug: "ai-voice-agent",
    workflowSummary: [
      "Voice conversation",
      "Vapi agent",
      "Appointment system",
      "Schedule / look up / cancel",
    ],
    title: "AI Voice Agent",
    category: "AI Agents / Voice AI",
    shortDescription:
      "A voice appointment demo showing scheduling, lookup, and cancellation with a connected backend.",
    description:
      "This recorded appointment-management demonstration uses Vapi for conversational interaction with a FastAPI backend and a Streamlit portal. The conversation collects appointment details, confirms a booking, retrieves an appointment, and confirms cancellation. The recording also shows an API response containing the booked appointment and the portal interface.",
    challenge:
      "Demonstrated use case: handling appointment requests through conversation while connecting to appointment records.",
    solution:
      "A Vapi assistant connects conversational requests to a Python appointment API, with a separate Streamlit interface.",
    workflow: [
      "Start a browser-based Vapi conversation.",
      "Collect the caller's name, appointment reason, date, and time.",
      "Confirm scheduling and inspect the appointment through the API.",
      "Request appointments for a date and receive a conversational result.",
      "Request cancellation and receive the agent's confirmation.",
      "Inspect the separate appointment-management portal.",
    ],
    technologies: [
      "Vapi",
      "Python",
      "FastAPI",
      "Streamlit",
      "SQLAlchemy",
      "OpenAI",
    ],
    cover: "/projects/voice-agent/cover.webp",
    images: [
      {
        src: "/projects/voice-agent/cancellation.webp",
        alt: "Vapi conversation showing the agent's appointment cancellation confirmation.",
      },
      {
        src: "/projects/voice-agent/appointment-api.webp",
        alt: "Appointment record returned by the demonstration API.",
      },
      {
        src: "/projects/voice-agent/appointment-portal.webp",
        alt: "Appointment portal with scheduling, viewing, and cancellation tabs.",
      },
    ],
    video: "/projects/voice-agent/demo.mp4",
    externalUrl:
      "https://www.linkedin.com/posts/sherykhan10_aivoiceagent-aiautomation-voiceai-activity-7485568293001531392-5tZV",
    featured: true,
    status: "published",
    metrics: [],
  },
];
