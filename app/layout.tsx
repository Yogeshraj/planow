import type { Metadata } from "next";
import { Suspense } from "react";
import { Noto_Sans } from "next/font/google";
import "@/styles/globals.css";
import ClientLayout from "./ClientLayout";
import GoogleAnalytics from "./GoogleAnalytics";
import Script from "next/script";

const notoSans = Noto_Sans({
  weight: ["100", "300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Planow – Eisenhower Matrix Task Management App",
    template: "%s – Planow",
  },
  description:
    "Planow helps you prioritize tasks using the Eisenhower Matrix. Focus on what's urgent and important — free, no account needed.",
  keywords:
    "eisenhower matrix, task management, todo app, productivity app, priority matrix, urgent important matrix, daily planner, organize tasks, to-do list, productivity tools, free task manager",
  authors: [{ name: "Yogesh Raj Kabilan" }],
  publisher: "Planow",
  applicationName: "Planow",
  metadataBase: new URL("https://planow.app"),
  openGraph: {
    type: "website",
    siteName: "Planow",
    url: "https://planow.app/",
    title: "Planow – Eisenhower Matrix Task Management App",
    description:
      "Planow helps you prioritize tasks using the Eisenhower Matrix. Focus on what's urgent and important — free, no account needed.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Planow – Eisenhower Matrix Task Management App",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@planowapp",
    title: "Planow – Eisenhower Matrix Task Management App",
    description:
      "Planow helps you prioritize tasks using the Eisenhower Matrix. Focus on what's urgent and important — free, no account needed.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://planow.app/",
  },
  icons: {
    shortcut: "/monogram.png",
    icon: "/monogram.png",
    apple: "/monogram.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem("theme") || "system";
                  const root = document.documentElement;

                  if (theme === "system") {
                    root.removeAttribute("data-theme");
                    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                    root.style.colorScheme = prefersDark ? "dark" : "light";
                    root.setAttribute("data-theme", prefersDark ? "dark" : "light");
                  } else {
                    root.setAttribute("data-theme", theme);
                    root.style.colorScheme = theme;
                  }
                } catch (e) {}
              })();
              `,
          }}
        />
        {/* ORGANIZATION SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Planow",
              url: "https://planow.app",
              logo: "https://planow.app/logo.svg",
              description:
                "Planow is a free productivity app built on the Eisenhower Matrix to help you prioritize tasks by urgency and importance.",
              contactPoint: {
                "@type": "ContactPoint",
                email: "planow25@gmail.com",
                contactType: "customer support",
              },
            }),
          }}
        />

        {/* WEBSITE SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Planow",
              url: "https://planow.app",
              description:
                "Free Eisenhower Matrix task management app to help you prioritize what truly matters.",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://planow.app/dashboard?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* SOFTWARE APPLICATION SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Planow",
              applicationCategory: "ProductivityApplication",
              operatingSystem: "Web, iOS, Android",
              url: "https://planow.app",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              description:
                "Planow is a free, web-based Eisenhower Matrix task management app. Prioritize tasks by urgency and importance with drag-and-drop simplicity.",
              screenshot: "https://planow.app/og-image.png",
              featureList:
                "Eisenhower Matrix, Drag and Drop Tasks, Dark Mode, Team Collaboration (coming soon), Analytics (coming soon)",
            }),
          }}
        />

        {/* FAQ SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Planow?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Planow is a productivity tool that uses the Eisenhower Matrix to help you prioritize tasks based on urgency and importance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Planow free to use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Planow is completely free to use for all users.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need to create an account?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, you can use Planow without an account. Login is optional and helps you sync your tasks across devices.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does the Eisenhower Matrix work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Eisenhower Matrix categorizes tasks into four quadrants: Do Now, Schedule for Later, Delegate, and Eliminate. Planow helps you organize tasks accordingly.",
                  },
                },
              ],
            }),
          }}
        />
        {/* HOWTO SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Use the Eisenhower Matrix in Planow",
              description:
                "A simple guide on using the Eisenhower Matrix inside Planow to prioritize tasks effectively.",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Open Planow",
                  text: "Go to https://planow.app to access the app instantly.",
                },
                {
                  "@type": "HowToStep",
                  name: "Add a Task",
                  text: "Click the Add Task button and enter your task details.",
                },
                {
                  "@type": "HowToStep",
                  name: "Choose a Quadrant",
                  text: "Select whether the task is urgent, important, both, or neither.",
                },
                {
                  "@type": "HowToStep",
                  name: "Drag and Drop Tasks",
                  text: "Move tasks between quadrants as priorities change.",
                },
                {
                  "@type": "HowToStep",
                  name: "Review Daily",
                  text: "Use the matrix to plan your day and eliminate unnecessary tasks.",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={notoSans.className}>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
