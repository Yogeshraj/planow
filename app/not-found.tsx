import type { Metadata } from "next";
import Link from "next/link";
import LandingFooter from "../components/home/LandingFooter";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <main className="bg-background flex min-h-[calc(100vh-100px)] flex-col items-center justify-center px-4 text-center">
        <p className="text-backgroundbg/30 mb-4 text-sm font-semibold tracking-widest uppercase">
          404
        </p>
        <h1 className="text-backgroundbg text-4xl font-extrabold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="text-backgroundbg/60 mt-4 max-w-sm text-base leading-relaxed">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
          have been moved, deleted, or never existed.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl bg-[#0e0e19] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-black"
          >
            Back to Home
          </Link>
          <Link
            href="/dashboard"
            className="text-backgroundbg/60 hover:text-backgroundbg rounded-xl border border-[#dedeeaff] px-6 py-3 text-sm font-medium transition-all hover:border-[#09093f]"
          >
            Open Dashboard
          </Link>
        </div>
      </main>
      <LandingFooter />
    </>
  );
}
