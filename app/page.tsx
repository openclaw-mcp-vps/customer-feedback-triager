export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          AI-Powered Routing
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Route customer feedback to the{" "}
          <span className="text-[#58a6ff]">right team</span>, automatically
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop manually triaging support tickets. Our AI reads incoming feedback, scores urgency, detects sentiment, and instantly routes to engineering, sales, or support — with Slack and email integrations built in.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $25/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">No credit card required for trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Sentiment Analysis", "Priority Scoring", "Auto-Routing", "Slack & Email", "OpenAI Powered", "Webhook Support"].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$25<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to triage at scale</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited feedback submissions",
              "AI classification & priority score",
              "Route to engineering, sales, support",
              "Slack & email notifications",
              "Webhook integrations",
              "Dashboard & analytics"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does the AI routing work?</h3>
            <p className="text-sm text-[#8b949e]">Each piece of feedback is sent to OpenAI, which classifies the content by team (engineering, sales, support), scores urgency from 1–10, and detects sentiment. Results are then dispatched via your configured Slack channels or email addresses.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What integrations are supported?</h3>
            <p className="text-sm text-[#8b949e]">We support Slack webhooks, email (SMTP), and generic webhooks so you can connect to any tool in your stack — including Jira, Linear, HubSpot, or Intercom via Zapier.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Your subscription is month-to-month with no long-term commitment. Cancel from your billing portal at any time and you won't be charged again.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} Customer Feedback Triager. All rights reserved.
      </footer>
    </main>
  );
}
