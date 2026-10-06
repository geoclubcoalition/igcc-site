import SignupForm from "@/components/SignupForm";

export default function SignupPage() {
  return (
    <div className="wrap">
      <div className="grid-shell">
        <div className="block">
          <h1>Sign up your club</h1>
          <p style={{ marginTop: 24, fontSize: "1.1rem" }}>
            Tell us about your club. We&apos;ll review it and follow up by
            email to confirm your spot at the next conference.
          </p>
          <p style={{ marginTop: 16, fontSize: "0.9rem", opacity: 0.7 }}>
            We only use these details to run the coalition and the
            conference - to contact you about your club&apos;s signup and
            to list your club once it&apos;s approved.
          </p>
        </div>
      </div>

      <div className="grid-shell">
        <div className="block">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}