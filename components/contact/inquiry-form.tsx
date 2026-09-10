"use client";
import { useState } from "react";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { Icon } from "@/components/ui/icon";
export function InquiryForm() {
  const [opened, setOpened] = useState(false);
  if (!site.contact.email.enabled) return null;
  return (
    <form
      className="inquiry-form"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const body = `Hi ${site.name},\n\nMy name is ${data.get("name")}.\n\nI'm interested in: ${data.get("service")}\n\nProject overview:\n${data.get("description")}\n`;
        window.location.href = `mailto:${site.contact.email.address}?subject=${encodeURIComponent("Project inquiry — " + data.get("service"))}&body=${encodeURIComponent(body)}`;
        setOpened(true);
      }}
    >
      <h2>Give us a little context.</h2>
      <p>
        This prepares a draft in your email app. You review it and send it
        yourself.
      </p>
      <label htmlFor="inquiry-name">
        Your name
        <input
          id="inquiry-name"
          name="name"
          autoComplete="name"
          required
          maxLength={100}
        />
      </label>
      <label htmlFor="inquiry-service">
        What are you thinking about?
        <select id="inquiry-service" name="service">
          <option>Not sure yet — let’s discuss</option>
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
        </select>
      </label>
      <label htmlFor="inquiry-description">
        What would you like to build or improve?
        <textarea
          id="inquiry-description"
          name="description"
          required
          maxLength={3000}
          placeholder="The workflow, the tools you use, and what a better outcome looks like…"
        />
      </label>
      <p className="small">
        Please leave out passwords, API keys, and sensitive business records.
      </p>
      <button className="button primary" type="submit">
        Prepare email draft
        <Icon name="diagonal" />
      </button>
      {opened && (
        <p role="status">
          Your email app has been requested. If it did not open, email{" "}
          {site.contact.email.address} using the contact option on this page.
          Nothing has been sent by this website.
        </p>
      )}
    </form>
  );
}
