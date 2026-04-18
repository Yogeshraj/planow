"use client";

import Link from "next/link";
import HeroIllustration from "./HeroIllustration";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Hero = () => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault();
        router.push("/dashboard");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="bg-background relative overflow-hidden py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Left — Copy */}
          <div className="z-10 w-full lg:w-1/2">
            <h1 className="text-backgroundbg text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
              Prioritize What <br />
              Matters with the <br />
              Eisenhower Matrix
            </h1>
            <p className="text-backgroundbg mt-6 max-w-lg text-lg">
              Stop being busy. Start being productive. Planow helps you focus on
              what&apos;s important, not just what&apos;s urgent.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <Link
                href="/dashboard"
                className="group bg-backgroundbg text-background flex items-center gap-3 rounded-xl px-6 py-4 transition-all"
              >
                <span className="font-bold">Launch App</span>
                <span className="bg-background/10 border-background/10 rounded-lg border">
                  <span className="text-background/60 flex items-center gap-1 rounded px-2 py-0.5 text-[10px]">
                    Ctrl <span>↵</span>
                  </span>
                </span>
              </Link>
            </div>
          </div>

          {/* Right — Illustration */}
          <div className="relative mt-16 w-full lg:mt-0 lg:block lg:w-1/2">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
