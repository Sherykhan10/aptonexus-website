import React from "react";

export function AIAgentsIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ai-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#95f537" />
        </linearGradient>
        <linearGradient id="ai-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="ai-accent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#95f537" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>

      {/* Subtle glowing backdrop circle */}
      <circle cx="28" cy="28" r="24" fill="url(#ai-bg)" />

      {/* Robot / AI Agent Head Outline */}
      <rect
        x="12"
        y="15"
        width="32"
        height="26"
        rx="10"
        stroke="url(#ai-glow)"
        strokeWidth="2.5"
      />

      {/* Antenna & Top Signal */}
      <path
        d="M28 15V8"
        stroke="url(#ai-glow)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="28" cy="7" r="3" fill="url(#ai-accent)" />

      {/* Side Communication Ears */}
      <rect
        x="7"
        y="23"
        width="4"
        height="10"
        rx="2"
        fill="url(#ai-glow)"
      />
      <rect
        x="45"
        y="23"
        width="4"
        height="10"
        rx="2"
        fill="url(#ai-glow)"
      />

      {/* Visor / Eye Display */}
      <rect
        x="17"
        y="21"
        width="22"
        height="12"
        rx="5"
        fill="#04120f"
        stroke="url(#ai-accent)"
        strokeWidth="1.5"
      />

      {/* Glowing Expressive Eyes */}
      <circle cx="23" cy="27" r="2.5" fill="#95f537" />
      <circle cx="33" cy="27" r="2.5" fill="#95f537" />

      {/* Chin Indicator / Chat Smile Dots */}
      <circle cx="24" cy="36" r="1" fill="#38BDF8" />
      <circle cx="28" cy="36" r="1" fill="#95f537" />
      <circle cx="32" cy="36" r="1" fill="#38BDF8" />

      {/* AI Sparkles */}
      <path
        d="M44 11L45.2 14.5L48.5 15.5L45.2 16.5L44 20L42.8 16.5L39.5 15.5L42.8 14.5L44 11Z"
        fill="#95f537"
      />
      <circle cx="10" cy="12" r="1.5" fill="#38BDF8" />
    </svg>
  );
}

export function WorkflowAutomationIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wf-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF416C" />
          <stop offset="50%" stopColor="#FF7A00" />
          <stop offset="100%" stopColor="#FFB300" />
        </linearGradient>
        <linearGradient id="wf-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7A00" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FF416C" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="wf-accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB300" />
          <stop offset="100%" stopColor="#FF416C" />
        </linearGradient>
      </defs>

      {/* Subtle backdrop */}
      <circle cx="28" cy="28" r="24" fill="url(#wf-bg)" />

      {/* Main Gear 1 (Top Left) */}
      <g transform="translate(20, 20)">
        <circle cx="0" cy="0" r="7" stroke="url(#wf-glow)" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="2.5" fill="#FFA500" />
        {/* Teeth */}
        <path
          d="M0 -9.5V-7.5M0 7.5V9.5M-9.5 0H-7.5M7.5 0H9.5M-6.7 -6.7L-5.3 -5.3M5.3 5.3L6.7 6.7M-6.7 6.7L-5.3 5.3M5.3 -5.3L6.7 -6.7"
          stroke="url(#wf-glow)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>

      {/* Interlocking Gear 2 (Bottom Right) */}
      <g transform="translate(34, 34)">
        <circle cx="0" cy="0" r="5" stroke="url(#wf-accent)" strokeWidth="2" />
        <circle cx="0" cy="0" r="1.8" fill="#FFB300" />
        {/* Teeth */}
        <path
          d="M0 -7V-5.5M0 5.5V7M-7 0H-5.5M5.5 0H7M-5 -5L-3.8 -3.8M3.8 3.8L5 5M-5 5L-3.8 3.8M3.8 -3.8L5 -5"
          stroke="url(#wf-accent)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* Automated Flow Cycle Loop Arrow */}
      <path
        d="M38 18C38 14 34 10 27 10C17 10 10 18 10 27C10 37 17 44 26 44"
        stroke="url(#wf-glow)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
      <path
        d="M35 15L39 18L35 21"
        stroke="#FFB300"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Connection Pulsing Nodes */}
      <circle cx="10" cy="27" r="3" fill="#FF7A00" />
      <circle cx="26" cy="44" r="3" fill="#FFB300" />

      {/* Lightning Trigger Symbol */}
      <path
        d="M37 7L33 13H37L35 18"
        stroke="#FFD700"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AIAppsIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="app-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id="app-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#EC4899" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="app-code" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#C084FC" />
        </linearGradient>
      </defs>

      {/* Subtle backdrop */}
      <circle cx="28" cy="28" r="24" fill="url(#app-bg)" />

      {/* Browser Window (Desktop / Web) */}
      <rect
        x="9"
        y="11"
        width="28"
        height="22"
        rx="5"
        stroke="url(#app-glow)"
        strokeWidth="2.2"
        fill="#070c18"
      />
      {/* Browser Header Bar */}
      <line
        x1="9"
        y1="17"
        x2="37"
        y2="17"
        stroke="url(#app-glow)"
        strokeWidth="1.5"
      />
      <circle cx="13" cy="14" r="1" fill="#EC4899" />
      <circle cx="16" cy="14" r="1" fill="#8B5CF6" />
      <circle cx="19" cy="14" r="1" fill="#3B82F6" />

      {/* Code Brackets </> inside Web Window */}
      <path
        d="M17 22L14 25L17 28M23 22L26 25L23 28M21 21L19 29"
        stroke="url(#app-code)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Mobile Device (Overlapping & Foreground) */}
      <rect
        x="29"
        y="21"
        width="18"
        height="26"
        rx="4"
        stroke="url(#app-glow)"
        strokeWidth="2.2"
        fill="#0d1124"
      />
      {/* Mobile Notch & Speaker */}
      <line
        x1="35"
        y1="23.5"
        x2="41"
        y2="23.5"
        stroke="#8B5CF6"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Mobile App Screen UI Elements */}
      <rect
        x="32"
        y="26"
        width="12"
        height="4"
        rx="1.5"
        fill="url(#app-code)"
      />
      <rect
        x="32"
        y="32"
        width="8"
        height="2"
        rx="1"
        fill="#60A5FA"
      />
      <rect
        x="32"
        y="36"
        width="10"
        height="2"
        rx="1"
        fill="#A78BFA"
      />
      <circle cx="38" cy="43" r="1.5" fill="#EC4899" />

      {/* AI Magic Star */}
      <path
        d="M44 11L45 13.5L47.5 14.5L45 15.5L44 18L43 15.5L40.5 14.5L43 13.5L44 11Z"
        fill="#C084FC"
      />
    </svg>
  );
}

export function CustomIntegrationsIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="int-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <linearGradient id="int-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="int-accent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#34D399" />
        </linearGradient>
      </defs>

      {/* Subtle backdrop */}
      <circle cx="28" cy="28" r="24" fill="url(#int-bg)" />

      {/* Central Integration Nexus Hub */}
      <rect
        x="21"
        y="21"
        width="14"
        height="14"
        rx="4"
        stroke="url(#int-glow)"
        strokeWidth="2.5"
        fill="#061622"
      />
      <circle cx="28" cy="28" r="3" fill="url(#int-accent)" />

      {/* Satellite Node 1: Top (API) */}
      <circle cx="28" cy="9" r="4.5" stroke="url(#int-glow)" strokeWidth="2" fill="#061622" />
      <circle cx="28" cy="9" r="1.8" fill="#22D3EE" />
      <path d="M28 14V21" stroke="url(#int-glow)" strokeWidth="2" strokeLinecap="round" />

      {/* Satellite Node 2: Right (Webhook/CRM) */}
      <circle cx="47" cy="28" r="4.5" stroke="url(#int-glow)" strokeWidth="2" fill="#061622" />
      <circle cx="47" cy="28" r="1.8" fill="#34D399" />
      <path d="M35 28H42" stroke="url(#int-glow)" strokeWidth="2" strokeLinecap="round" />

      {/* Satellite Node 3: Bottom (Database) */}
      <circle cx="28" cy="47" r="4.5" stroke="url(#int-glow)" strokeWidth="2" fill="#061622" />
      <circle cx="28" cy="47" r="1.8" fill="#3B82F6" />
      <path d="M28 35V42" stroke="url(#int-glow)" strokeWidth="2" strokeLinecap="round" />

      {/* Satellite Node 4: Left (Inbox/Cloud) */}
      <circle cx="9" cy="28" r="4.5" stroke="url(#int-glow)" strokeWidth="2" fill="#061622" />
      <circle cx="9" cy="28" r="1.8" fill="#06B6D4" />
      <path d="M14 28H21" stroke="url(#int-glow)" strokeWidth="2" strokeLinecap="round" />

      {/* Diagonal Data Transfer Conduits */}
      <path
        d="M15 15L23 23M41 15L33 23M15 41L23 33M41 41L33 33"
        stroke="url(#int-accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />

      {/* Mini sync arrows */}
      <circle cx="39" cy="17" r="1.5" fill="#34D399" />
      <circle cx="17" cy="39" r="1.5" fill="#22D3EE" />
    </svg>
  );
}

export function ServiceCardIcon({ index }: { index: number }) {
  switch (index) {
    case 0:
      return <AIAgentsIcon />;
    case 1:
      return <WorkflowAutomationIcon />;
    case 2:
      return <AIAppsIcon />;
    case 3:
      return <CustomIntegrationsIcon />;
    default:
      return <AIAgentsIcon />;
  }
}
