import type { Metadata } from "next";
import LandingFooter from "../../components/home/LandingFooter";

export const metadata: Metadata = {
  title: "Privacy Policy – Planow",
  description:
    "Read our Privacy Policy to understand how Planow collects, uses, and protects your personal data.",
  alternates: {
    canonical: "https://planow.app/privacy",
  },
};

const sections = [
  {
    title: "1. Information We Collect",
    intro: "We collect information you provide directly to us, including:",
    items: [
      "Account information (name, email address)",
      "Task data and content you create",
      "Usage information and preferences",
    ],
  },
  {
    title: "2. How We Use Your Information",
    intro: "We use the information we collect to:",
    items: [
      "Provide, maintain, and improve our services",
      "Send you technical notices and support messages",
      "Respond to your comments and questions",
      "Analyze usage patterns and trends",
    ],
  },
  {
    title: "3. Data Storage and Security",
    intro:
      "Your data is stored securely using industry-standard encryption. We implement appropriate technical and organizational measures to protect your personal information.",
    items: [],
  },
  {
    title: "4. Data Sharing",
    intro:
      "We do not sell your personal information. We may share your information only in the following circumstances:",
    items: [
      "With your consent",
      "With service providers who assist us in providing the service",
      "To comply with legal obligations",
    ],
  },
  {
    title: "5. Your Rights (GDPR Compliance)",
    intro: "You have the right to:",
    items: [
      "Access your personal data",
      "Correct inaccurate data",
      "Request deletion of your data",
      "Export your data",
      "Object to data processing",
    ],
  },
  {
    title: "6. Cookies",
    intro:
      "We use cookies and similar tracking technologies to track activity on our service and hold certain information to improve your experience.",
    items: [],
  },
  {
    title: "7. Contact Us",
    intro: null,
    items: [],
    contactEmail: "planow25@gmail.com",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <main className="bg-background min-h-screen">
        {/* Hero */}
        <section className="bg-background py-16 lg:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h1 className="text-backgroundbg text-4xl font-extrabold tracking-tight sm:text-5xl">
                Privacy Policy
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
                  <div className="text-backgroundbg/60 space-y-3 md:col-span-2">
                    {section.intro && (
                      <p className="leading-relaxed">{section.intro}</p>
                    )}
                    {section.items.length > 0 && (
                      <ul className="space-y-1.5">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="mt-0.5 text-xs">✓</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.contactEmail && (
                      <p className="leading-relaxed">
                        If you have any questions about this Privacy Policy,
                        please contact us at{" "}
                        <a
                          href={`mailto:${section.contactEmail}`}
                          className="text-backgroundbg underline underline-offset-2 transition-opacity hover:opacity-70"
                        >
                          {section.contactEmail}
                        </a>
                        .
                      </p>
                    )}
                  </div>
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
