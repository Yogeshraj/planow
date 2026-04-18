"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

const CTASection = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          img.classList.add("active");
        } else {
          img.classList.remove("active");
        }
      });
    });

    observer.observe(img);

    return () => {
      observer.unobserve(img);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-3xl bg-[#0e0e19] text-white">
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="relative h-[400px] w-full lg:h-[350px] lg:w-1/2">
              <Image
                ref={imgRef}
                src="/cta-graphic.png"
                alt="Productivity Visualization"
                className="scroll-img object-cover opacity-60"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-r from-[#0e0e19] to-transparent lg:hidden" />
            </div>
            <div className="p-8 lg:w-1/2 lg:p-16">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                Ready to Get Organized?
              </h2>
              <p className="mt-6 text-lg text-gray-400">
                Join thousands of productive people using Planow to prioritize
                what truly matters.
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
