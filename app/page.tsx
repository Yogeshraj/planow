import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import CTASection from "../components/home/CTASection";
import LandingFooter from "../components/home/LandingFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planow – Eisenhower Matrix Task Management App",
  description:
    "Stop being busy. Start being productive. Planow helps you prioritize tasks using the Eisenhower Matrix — Do Now, Schedule, Delegate, or Eliminate.",
  alternates: {
    canonical: "https://planow.app/",
  },
};

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <Features />
      <CTASection />
      <LandingFooter />
    </main>
  );
}
