"use client";

import { SquareStack, Users, BarChart3, MousePointer2 } from "lucide-react";

const features = [
  {
    title: "Adv. Eisenhower Matrix",
    description:
      "Organize tasks into 5 quadrants based on urgency and importance",
    icon: <SquareStack className="text-backgroundbg h-6 w-6" />,
    comingSoon: false,
  },
  {
    title: "Drag & Drop",
    description: "Shift tasks between quadrants using intuitive drag and drop.",
    icon: <MousePointer2 className="text-backgroundbg h-6 w-6" />,
    comingSoon: false,
  },
  {
    title: "Team Collaboration",
    description: "Share groups with team members and work together seamlessly.",
    icon: <Users className="text-backgroundbg h-6 w-6" />,
    comingSoon: true,
  },
  {
    title: "Analytics & Reports",
    description: "Track productivity with beautiful charts and insights.",
    icon: <BarChart3 className="text-backgroundbg h-6 w-6" />,
    comingSoon: true,
  },
];

const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <h2 className="text-backgroundbg text-3xl">
            Everything You Need to Stay Productive
          </h2>
          <p className="text-backgroundbg mt-4 font-medium">
            Powerful features to help you and your team prioritize tasks
            effectively
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-surfacecontainer border-outlinevariant relative flex flex-col items-start rounded-2xl border p-6 transition-all hover:shadow-lg"
            >
              <div className="bg-surfacebright mb-6 flex h-12 w-12 items-center justify-center rounded-full">
                {feature.icon}
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-backgroundbg text-xl font-bold">
                  {feature.title}
                </h3>
                {feature.comingSoon && (
                  <span className="bg-outline text-surface rounded-full px-2.5 py-0.5 text-[10px] font-medium">
                    Coming Soon
                  </span>
                )}
              </div>
              <p className="text-surfacevariantbg mt-2 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
