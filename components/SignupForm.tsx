"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "ok" | "error";

export default function SignupForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot — real users never fill this in.
    if (data.website_url) {
      setStatus("ok");
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Try again.");
      }

      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    }
  }

  if (status === "ok") {
    return (
      <div className="form-status form-status--ok">
        Thanks — your club is in. We&apos;ll be in touch once it&apos;s
        confirmed.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {status === "error" && (
        <div className="form-status form-status--error">{errorMessage}</div>
      )}

      <div className="field">
        <label htmlFor="clubName">Club name</label>
        <input id="clubName" name="clubName" type="text" required />
      </div>

      <div className="field">
        <label htmlFor="school">School</label>
        <input id="school" name="school" type="text" required />
      </div>

      <div className="field">
        <label htmlFor="country">Country</label>
        <input id="country" name="country" type="text" required />
      </div>

      <div className="field">
        <label htmlFor="contactName">Your name</label>
        <input id="contactName" name="contactName" type="text" required />
      </div>

      <div className="field">
        <label htmlFor="contactEmail">Your email</label>
        <input id="contactEmail" name="contactEmail" type="email" required />
      </div>

      <div className="field">
        <label htmlFor="link">
          Club website or Instagram <span className="hint">optional</span>
        </label>
        <input id="link" name="link" type="text" />
      </div>

      <div className="field">
        <label htmlFor="about">Tell us about your club</label>
        <textarea
          id="about"
          name="about"
          required
          placeholder="What does your club actually do? How many members? How long has it been running?"
        />
      </div>

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website_url">Leave this blank</label>
        <input id="website_url" name="website_url" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" className="btn btn--primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Sign up"}
      </button>
    </form>
  );
}
