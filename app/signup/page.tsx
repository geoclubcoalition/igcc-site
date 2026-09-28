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
