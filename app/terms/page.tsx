import type { Metadata } from "next";
import LandingFooter from "../../components/home/LandingFooter";

export const metadata: Metadata = {
  title: "Terms & Conditions – Planow",
  description:
    "Read the Terms & Conditions for using Planow, the Eisenhower Matrix task management app.",
  alternates: {
    canonical: "https://planow.app/terms",
  },
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using Planow, you accept and agree to be bound by the terms and provision of this agreement.",
  },
  {
    title: "2. Use License",
    content:
      "Permission is granted to temporarily use Planow for personal or commercial task management purposes. This license shall automatically terminate if you violate any of these restrictions.",
  },
  {
    title: "3. User Accounts",
    content:
      "You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.",
  },
  {
    title: "4. Content",
    content:
      "You retain all rights to the content you create using Planow. We do not claim ownership of your tasks, notes, or other data.",
  },
  {
    title: "5. Limitation of Liability",
    content:
      "Planow shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.",
  },
  {
    title: "6. Modifications",
    content:
      "We reserve the right to modify these terms at any time. We will notify users of any significant changes.",
  },
];

export default function TermsPage() {
  return (
    <>
      <main className="bg-background min-h-screen">
        {/* Hero */}
        <section className="bg-background py-16 lg:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h1 className="text-backgroundbg text-4xl font-extrabold tracking-tight sm:text-5xl">
                Terms &amp; Conditions
              </h1>
              <span className="text-backgroundbg/60 shrink-0 text-sm">
                Last Updated: February 23, 2026
              </span>
            </div>
          </div>
        </section>

        {/* Sections */}
        <section className="bg-surfacecontainerlow md:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="divide-outlinevariant divide-y">
              {sections.map((section, idx) => (
                <div
                  key={idx}
                  className="grid gap-4 py-8 md:grid-cols-3 md:gap-12"
                >
                  <h2 className="text-backgroundbg font-semibold md:col-span-1">
                    {section.title}
                  </h2>
                  <p className="text-backgroundbg/60 leading-relaxed md:col-span-2">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </>
  );
}
