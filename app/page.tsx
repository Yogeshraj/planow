import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import CTASection from "../components/home/CTASection";
import LandingFooter from "../components/home/LandingFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planow – Eisenhower Matrix Task Management App",
  description:
    "Master your productivity with Planow. Stop being busy and start being productive using the Eisenhower Matrix methodology. Prioritize tasks as Urgent or Important and focus on what truly matters.",
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
