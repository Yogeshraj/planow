import type { Metadata } from "next";
import Link from "next/link";
import LandingFooter from "../../components/home/LandingFooter";

export const metadata: Metadata = {
  title: "Why Planow – Smarter Task Prioritization with the Eisenhower Matrix",
  description:
    "Discover why Planow is the best tool for task prioritization. Built on the Eisenhower Matrix, Planow helps you focus on what truly matters.",
  alternates: {
    canonical: "https://planow.app/why-planow",
  },
};

const reasons = [
  {
    emoji: "📐",
    title: "Proven Methodology",
    description:
      "The Eisenhower Matrix has been used by leaders and productivity experts for decades. Planow digitizes this timeless framework so you can apply it effortlessly every day.",
  },
  {
    emoji: "🆓",
    title: "No Subscription Required",
    description:
      "Planow is completely free to use. Start prioritizing your tasks instantly without entering a credit card or committing to a plan.",
  },
  {
    emoji: "⚡",
    title: "Works Without an Account",
    description:
      "Jump straight into your workflow. You don't need to sign up to use Planow — create an account only when you want to sync across devices.",
  },
  {
    emoji: "🎯",
    title: "Designed for Clarity",
    description:
      "Cluttered task lists lead to decision fatigue. Planow's clean, focused interface surfaces what needs your attention right now, and nothing else.",
  },
  {
    emoji: "🖱️",
    title: "Drag & Drop Simplicity",
    description:
      "Reprioritizing tasks is as easy as dragging them between quadrants. Adapt your plan as your day evolves without friction.",
  },
  {
    emoji: "🌐",
    title: "Built for the Modern Web",
    description:
      "Fast, responsive, and works great on any device. Planow is a progressive web experience that feels native wherever you use it.",
  },
];

export default function WhyPlanowPage() {
  return (
    <>
      <main className="bg-background min-h-screen">
        {/* Hero */}
        <section className="bg-background py-16 lg:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <p className="text-backgroundbg/40 mb-4 text-sm font-medium tracking-widest uppercase">
              Why Planow
            </p>
            <h1 className="text-backgroundbg max-w-3xl text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl">
              Stop being busy. Start being productive.
            </h1>
            <p className="text-backgroundbg/60 mt-6 max-w-xl text-lg leading-relaxed">
              Here&apos;s why Planow is the smarter way to manage your tasks,
              built on a methodology trusted by leaders worldwide.
            </p>
          </div>
        </section>

        {/* Reasons Grid */}
        <section className="bg-surfacecontainerlow py-16 lg:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason, idx) => (
                <div
                  key={idx}
                  className="group bg-surfacecontainer flex flex-col gap-4 rounded-2xl p-8 transition-all hover:shadow-md"
                >
                  <div className="bg-surfacebright inline-flex h-12 w-12 items-center justify-center rounded-full text-2xl">
                    {reason.emoji}
                  </div>
                  <h2 className="text-backgroundbg text-lg font-bold">
                    {reason.title}
                  </h2>
                  <p className="text-backgroundbg/60 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-background py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="bg-backgroundbg flex flex-col items-start gap-6 rounded-3xl px-8 py-10 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-background/60 text-xl font-bold">
                  Ready to take control of your tasks?
                </h2>
                <p className="text-background/60 mt-1 text-sm">
                  Join thousands of productive people using Planow.{" "}
                  <Link
                    href="/about"
                    className="text-background underline underline-offset-2"
                  >
                    Learn about us →
                  </Link>
                </p>
              </div>
              <Link
                href="/dashboard"
                className="bg-background text-backgroundbg shrink-0 rounded-xl px-6 py-3 text-sm font-bold transition-all hover:opacity-90"
              >
                Launch App →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </>
  );
}
