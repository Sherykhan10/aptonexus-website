import React from "react";

const reviews = [
  { name: "Sarah Jenkins", text: "Shery's AI agent completely transformed our customer support. We are saving 40 hours a week!" },
  { name: "Mark Robinson", text: "The workflow automation he built in n8n is flawless. Our lead generation is now on autopilot." },
  { name: "Emily Chen", text: "Built a custom voice AI for our front desk. Clients can't even tell it's a bot. Incredible work." },
  { name: "David Miller", text: "End-to-end automation at its finest. He connected our CRM to our billing software seamlessly." },
  { name: "Jessica Hayes", text: "AptoNexus delivered exactly what they promised: less theory, more working systems. Highly recommended!" },
  { name: "Robert Taylor", text: "We replaced three manual data entry roles with one AI script Shery wrote. ROI was immediate." },
  { name: "Amanda Wright", text: "The AI assistant qualifies our leads 24/7. Sales have increased by 35% since deployment." },
  { name: "James Carter", text: "Finally, an AI developer who understands business logic. The custom integration is saving us thousands." },
  { name: "Laura Martinez", text: "Fast, secure, and scalable. The backend architecture he designed for our AI app is top-tier." },
  { name: "Kevin Patel", text: "He automated our entire onboarding process. What used to take days now takes minutes." },
  { name: "Samantha Brooks", text: "The Make.com scenarios he built are incredibly robust. Zero downtime so far." },
  { name: "Daniel Thompson", text: "Voice AI integration was smooth and natural. Our booking rate skyrocketed." },
  { name: "Rachel Adams", text: "Shery is a true automation engineer. He found bottlenecks we didn't even know we had." },
  { name: "Brian Scott", text: "The AI chatbot handles 80% of our tier 1 support tickets now. Game changer." },
  { name: "Michelle Davis", text: "Extremely professional. Delivered a complex AI integration two days ahead of schedule." },
  { name: "Thomas Evans", text: "Our internal data extraction is completely automated now. Outstanding attention to detail." },
  { name: "Nicole Wilson", text: "He connected our Slack, Google Drive, and CRM perfectly. The team loves the new workflow." },
  { name: "Christopher Lee", text: "If you need real AI automation, this is the guy. The custom software works flawlessly." },
  { name: "Olivia Harris", text: "Reduced our operational friction to zero. The custom AI solutions are worth every penny." },
  { name: "William Clark", text: "Brilliant problem solver. He built an AI system that scaled effortlessly during our peak season." }
];

export function TestimonialMarquee() {
  return (
    <section className="w-full bg-white py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-800 text-sm font-medium mb-4 border border-slate-200">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-slate-900">
          Hear from our Clients
        </h2>
      </div>

      {/* Marquee Track Container */}
      <div className="flex overflow-hidden relative w-full">
        {/* Animated Flex Track */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {/* First set of cards */}
          {reviews.map((review, idx) => (
            <div
              key={`review-1-${idx}`}
              className="w-[300px] md:w-[400px] flex-shrink-0 mx-4 p-6 bg-[#12181c] border border-white/5 rounded-2xl flex flex-col justify-between"
            >
              <p className="text-slate-300 text-base mb-6 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#95f537] flex items-center justify-center text-[#0a1114] font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">{review.name}</h4>
                </div>
              </div>
            </div>
          ))}
          {/* Duplicated set for seamless loop */}
          {reviews.map((review, idx) => (
            <div
              key={`review-2-${idx}`}
              className="w-[300px] md:w-[400px] flex-shrink-0 mx-4 p-6 bg-[#12181c] border border-white/5 rounded-2xl flex flex-col justify-between"
            >
              <p className="text-slate-300 text-base mb-6 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#95f537] flex items-center justify-center text-[#0a1114] font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">{review.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fade edges for desktop */}
      <div className="hidden md:block absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="hidden md:block absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
    </section>
  );
}

export default TestimonialMarquee;
