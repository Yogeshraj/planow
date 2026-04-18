import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Tasks – Planow",
  description: "View all your tasks across every quadrant in one place.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AllTasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
