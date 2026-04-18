import type { Metadata } from "next";
import Link from "next/link";
import LandingFooter from "../../components/home/LandingFooter";

export const metadata: Metadata = {
  title: "About Us – Planow",
  description:
    "Learn about Planow, your intelligent task management companion based on the proven Eisenhower Matrix methodology.",
  alternates: {
    canonical: "https://planow.app/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <main className="bg-background min-h-screen">
        {/* Hero */}
        <section className="bg-background py-16 lg:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <p className="text-backgroundbg/40 mb-4 text-sm font-medium tracking-widest uppercase">
              About Us
            </p>
            <h1 className="text-backgroundbg max-w-3xl text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl">
              Welcome to Planow, your intelligent task management companion
              based on the proven Eisenhower Matrix methodology.
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="bg-surfacecontainerlow py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Our Mission */}
              <div className="flex flex-col gap-4">
                <div className="bg-surfacebright inline-flex h-10 w-10 items-center justify-center rounded-full">
                  <span className="text-backgroundbg text-lg">🎯</span>
                </div>
                <h2 className="text-backgroundbg text-2xl font-bold">
                  Our Mission
                </h2>
                <p className="text-backgroundbg/60 leading-relaxed">
                  We believe that effective time management starts with
                  understanding what truly matters. Planow helps you distinguish
                  between what&apos;s urgent and what&apos;s important, enabling
                  you to focus on tasks that align with your goals.
                </p>
              </div>

              {/* Our Team */}
              <div className="flex flex-col gap-4">
                <div className="bg-surfacebright inline-flex h-10 w-10 items-center justify-center rounded-full">
                  <span className="text-backgroundbg text-lg">👥</span>
                </div>
                <h2 className="text-backgroundbg text-2xl font-bold">
                  Our Team
                </h2>
                <p className="text-backgroundbg/60 leading-relaxed">
                  Built by productivity enthusiasts who understand the
                  challenges of modern task management, Planow combines timeless
                  principles with modern technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-background py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="bg-backgroundbg flex flex-col items-start gap-6 rounded-3xl px-8 py-10 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-background/60 text-sm font-medium">
                  Contact or Support
                </p>
                <a
                  href="mailto:planow25@gmail.com"
                  className="text-background mt-1 block text-xl font-bold underline underline-offset-4 transition-opacity hover:opacity-80"
                >
                  planow25@gmail.com
                </a>
              </div>
              <Link
                href="/dashboard"
                className="bg-background text-backgroundbg rounded-xl px-6 py-3 text-sm font-bold transition-all hover:opacity-90"
              >
                Launch App
              </Link>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </>
  );
}
