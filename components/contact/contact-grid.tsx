"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { services } from "@/content/services";

export function ContactGrid() {
  const [opened, setOpened] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `Hi ${site.name},\n\nMy name is ${data.get("name")}.\n\nI'm interested in: ${data.get("service")}\n\nProject overview:\n${data.get("description")}\n`;
    window.location.href = `mailto:${site.contact.email.address}?subject=${encodeURIComponent("Project inquiry — " + data.get("service"))}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      {/* LEFT COLUMN: Contact Options */}
      <div className="lg:col-span-5 w-full">
        {/* Applied Layered Shadow */}
        <div className="layered-shadow-card w-full">
          <div className="bg-white rounded-3xl p-8 lg:p-10 relative h-full border border-slate-200">
            {/* Contact Buttons */}
            <div className="space-y-4 mb-8">
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${site.contact.whatsapp.number}?text=${encodeURIComponent(site.contact.whatsapp.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white border border-slate-200 p-5 rounded-2xl hover:bg-slate-50 transition-colors group shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="text-brandGreen">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-dark font-bold text-[15px]">
                      Chat on WhatsApp
                    </h3>
                    <p className="text-slate-500 text-sm mt-0.5">
                      {site.contact.whatsapp.displayNumber}
                    </p>
                  </div>
                </div>
                <div className="text-slate-400 group-hover:text-dark transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </a>

              {/* Email Button */}
              <a
                href={`mailto:${site.contact.email.address}`}
                className="flex items-center justify-between bg-white border border-slate-200 p-5 rounded-2xl hover:bg-slate-50 transition-colors group shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="text-brandGreen">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-dark font-bold text-[15px]">
                      Send an email
                    </h3>
                    <p className="text-slate-500 text-sm mt-0.5">
                      {site.contact.email.address}
                    </p>
                  </div>
                </div>
                <div className="text-slate-400 group-hover:text-dark transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </a>
            </div>

            {/* Footer Text */}
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Not sure what the solution looks like yet? Start with what gets in
              the way.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              A description of the current workflow and the tools involved is a
              useful starting point.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Form */}
      <div className="lg:col-span-7 w-full">
        {/* Applied Layered Shadow */}
        <div className="layered-shadow-card w-full">
          <div className="bg-white rounded-3xl p-8 lg:p-10 relative border border-slate-200">
            <h3 className="font-heading text-dark text-2xl lg:text-3xl font-extrabold mb-2">
              Give us a little context.
            </h3>
            <p className="text-slate-500 text-sm mb-8">
              This prepares a draft in your email app. You review it and send it
              yourself.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="inquiry-name"
                  className="block text-slate-700 text-sm font-semibold mb-2"
                >
                  Your name
                </label>
                <input
                  id="inquiry-name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-white border border-slate-300 rounded-xl p-3.5 text-dark placeholder-slate-400 focus:border-brandGreen focus:ring-1 focus:ring-brandGreen outline-none transition-all shadow-sm"
                  placeholder="John Doe"
                />
              </div>

              {/* Dropdown */}
              <div>
                <label
                  htmlFor="inquiry-service"
                  className="block text-slate-700 text-sm font-semibold mb-2"
                >
                  What are you thinking about?
                </label>
                <select
                  id="inquiry-service"
                  name="service"
                  className="w-full bg-white border border-slate-300 rounded-xl p-3.5 text-dark focus:border-brandGreen focus:ring-1 focus:ring-brandGreen outline-none transition-all shadow-sm"
                >
                  <option>{"Not sure yet — let's discuss"}</option>
                  {services.map((service) => (
                    <option key={service.slug} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Textarea */}
              <div>
                <label
                  htmlFor="inquiry-description"
                  className="block text-slate-700 text-sm font-semibold mb-2"
                >
                  What would you like to build or improve?
                </label>
                <textarea
                  id="inquiry-description"
                  name="description"
                  rows={4}
                  required
                  className="w-full bg-white border border-slate-300 rounded-xl p-3.5 text-dark placeholder-slate-400 focus:border-brandGreen focus:ring-1 focus:ring-brandGreen outline-none transition-all shadow-sm"
                  placeholder="The workflow, the tools you use, and what a better outcome looks like..."
                />
                <p className="text-slate-500 text-xs mt-3">
                  Please leave out passwords, API keys, and sensitive business records.
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-brandGreen text-dark font-bold px-7 py-3.5 rounded-full hover:opacity-80 transition-opacity shadow-sm text-sm"
                >
                  Prepare email draft
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </button>
              </div>
              {opened && (
                <p role="status" className="text-xs text-slate-500 mt-2">
                  Your email app has been requested. If it did not open, email{" "}
                  {site.contact.email.address} directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
