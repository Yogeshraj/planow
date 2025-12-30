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
  title: "Planow – Eisenhower Matrix To-Do App for Smart Task Prioritization",
  description:
    "Planow is a productivity app that uses the Eisenhower Matrix to prioritize tasks. Act on what matters now, delegate, schedule, and reduce distractions.",
  keywords:
    "todo app, task management, productivity app, Eisenhower matrix, priority matrix, urgent important matrix, daily planner, schedule tasks, organize tasks, to-do list web app, productivity tools",
  authors: [{ name: "Yogesh Raj Kabilan" }],
  publisher: "Planow",
  metadataBase: new URL("https://planow.app"),
  openGraph: {
    type: "website",
    url: "https://planow.app/",
    title: "Planow - Prioritize Your Productivity",
    description:
      "Planow is a productivity app that uses the Eisenhower Matrix to prioritize tasks. Act on what matters now, delegate, schedule, and reduce distractions.",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Planow - Prioritize Your Productivity",
    description:
      "Planow is a productivity app that uses the Eisenhower Matrix to prioritize tasks. Act on what matters now, delegate, schedule, and reduce distractions.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://planow.app/",
  },
  icons: {
    shortcut: "/monogram.png",
    icon: "/monogram.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
                  } else {
                    root.setAttribute("data-theme", theme);
                    root.style.colorScheme = theme;
                  }
                } catch (e) {}
              })();
              `,
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
