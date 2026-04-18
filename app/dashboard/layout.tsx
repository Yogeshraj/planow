import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planow Dashboard – Your Eisenhower Matrix Task Board",
  description:
    "Manage and prioritize your tasks using the Eisenhower Matrix. Organize work into Do Now, Schedule, Delegate, and Eliminate quadrants.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
