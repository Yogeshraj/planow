"use client";

/**
 * HeroIllustration — "The Living Matrix"
 *
 * A floating 2×2 Eisenhower Matrix UI mock built entirely with
 * CSS/JSX. No external images. Theme-aware via existing tokens.
 */

const quadrants = [
  {
    id: "q1",
    label: "Do Now",
    sub: "Urgent · Important",
    glowColor: "rgba(13,131,76,0.10)",
    borderColor: "rgba(13,131,76,0.18)",
    dotColor: "#0d834c",
  },
  {
    id: "q2",
    label: "Schedule",
    sub: "Not Urgent · Important",
    glowColor: "rgba(8,63,145,0.08)",
    borderColor: "rgba(8,63,145,0.15)",
    dotColor: "#083f91",
  },
  {
    id: "q3",
    label: "Delegate",
    sub: "Urgent · Not Important",
    glowColor: "rgba(188,102,15,0.07)",
    borderColor: "rgba(188,102,15,0.13)",
    dotColor: "#bc660f",
  },
  {
    id: "q4",
    label: "Eliminate",
    sub: "Not Urgent · Not Important",
    glowColor: "rgba(98,31,40,0.07)",
    borderColor: "rgba(98,31,40,0.12)",
    dotColor: "#621f28",
  },
];

interface TaskCardProps {
  label: string;
  tag: string;
  accent: string;
  accentBg: string;
  delay: string;
  ghost?: boolean;
  extraClass?: string;
}

const TaskCard = ({
  label,
  tag,
  accent,
  accentBg,
  delay,
  ghost = false,
  extraClass = "",
}: TaskCardProps) => (
  <div
    className={`hero-card relative flex items-center gap-2.5 rounded-xl border px-3 py-2.5 shadow-sm ${extraClass}`}
    style={{
      animationDelay: delay,
      background: ghost ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.92)",
      borderColor: ghost ? "rgba(222,222,234,0.5)" : "rgba(222,222,234,0.9)",
      backdropFilter: "blur(8px)",
      opacity: ghost ? undefined : 0,
      animation: ghost ? `ghostPulse 2s ease-in-out infinite` : undefined,
    }}
  >
    {/* Color accent bar */}
    <span
      className="h-6 w-1 shrink-0 rounded-full"
      style={{ background: accent }}
    />
    {/* Text */}
    <span className="flex flex-col gap-0.5">
      <span
        className="text-[11px] leading-none font-semibold"
        style={{ color: "var(--support-backgroundbg)" }}
      >
        {label}
      </span>
      <span
        className="text-[9px] leading-none"
        style={{
          background: accentBg,
          color: accent,
          borderRadius: "20px",
          padding: "1px 5px",
          display: "inline-block",
          fontWeight: 500,
        }}
      >
        {tag}
      </span>
    </span>
    {/* Drag handle dots */}
    <span className="ml-auto flex flex-col gap-[3px] opacity-30">
      {[0, 1, 2].map((i) => (
        <span key={i} className="flex gap-[3px]">
          <span
            className="h-[3px] w-[3px] rounded-full"
            style={{ background: "var(--support-backgroundbg)" }}
          />
          <span
            className="h-[3px] w-[3px] rounded-full"
            style={{ background: "var(--support-backgroundbg)" }}
          />
        </span>
      ))}
    </span>
  </div>
);

export default function HeroIllustration() {
  return (
    <div
      className="hero-illustration-root relative flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Background dot pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(14,14,25,0.09) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 60% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 60% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Floating matrix panel */}
      <div
        className="matrix-panel relative"
        style={{
          width: "100%",
          maxWidth: 420,
          borderRadius: 20,
          boxShadow:
            "0 8px 16px rgba(14,14,25,0.06), 0 32px 64px rgba(14,14,25,0.10)",
          background: "rgba(247,247,255,0.7)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(222,222,234,0.7)",
          overflow: "hidden",
        }}
      >
        {/* Panel header bar */}
        <div
          className="flex items-center gap-1.5 px-4 py-3"
          style={{
            borderBottom: "1px solid rgba(222,222,234,0.6)",
            background: "rgba(255,255,255,0.6)",
          }}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffc5cd]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#fff5cd]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#cdfddd]" />
          <span
            className="ml-3 text-[10px] font-medium"
            style={{ color: "var(--support-outline)" }}
          >
            Eisenhower Matrix — Today
          </span>
        </div>

        {/* Axis labels */}
        <div className="relative">
          {/* X-axis label top */}
          <div className="flex" style={{ padding: "6px 0 0" }}>
            {/* <div className="flex-1" /> */}
            <div
              className="flex flex-1 items-center justify-center gap-3"
              style={{
                fontSize: 9,
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "var(--support-outline)",
                textTransform: "uppercase",
              }}
            >
              <span>← Urgent</span>
              <span>Not Urgent →</span>
            </div>
          </div>

          {/* 2×2 Grid */}
          <div
            className="grid"
            style={{
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              gap: 1,
              background: "rgba(222,222,234,0.4)",
              margin: "6px 0",
            }}
          >
            {quadrants.map((q) => (
              <div
                key={q.id}
                className="relative flex flex-col gap-2 p-3"
                style={{
                  background: `radial-gradient(ellipse at 30% 30%, ${q.glowColor}, transparent 70%), rgba(255,255,255,0.75)`,
                  border: `1px solid ${q.borderColor}`,
                  minHeight: 110,
                }}
              >
                {/* Quadrant dot + label */}
                <div className="flex items-center gap-1.5">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: q.dotColor }}
                  />
                  <span
                    className="text-[10px] font-bold"
                    style={{ color: q.dotColor }}
                  >
                    {q.label}
                  </span>
                </div>
                <span
                  className="text-[8px] leading-none"
                  style={{ color: "var(--support-outline)", marginTop: -4 }}
                >
                  {q.sub}
                </span>

                {/* Cards live inside the quadrants */}
                {q.id === "q1" && (
                  <div className="mt-1 flex flex-col gap-1.5">
                    <TaskCard
                      label="Launch onboarding flow"
                      tag="Do Now"
                      accent="#0d834c"
                      accentBg="#ebfff2"
                      delay="0.1s"
                    />
                    <TaskCard
                      label="Fix critical bug #204"
                      tag="Do Now"
                      accent="#0d834c"
                      accentBg="#ebfff2"
                      delay="0.25s"
                    />
                  </div>
                )}
                {q.id === "q2" && (
                  <div className="mt-1 flex flex-col gap-1.5">
                    <TaskCard
                      label="Q1 roadmap planning"
                      tag="Schedule"
                      accent="#083f91"
                      accentBg="#ebf7ff"
                      delay="0.4s"
                    />
                  </div>
                )}
                {q.id === "q3" && (
                  <div className="mt-1 flex flex-col gap-1.5">
                    <TaskCard
                      label="Reply to vendor emails"
                      tag="Delegate"
                      accent="#bc660f"
                      accentBg="#fffdeb"
                      delay="0.55s"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Ghost drag card — mid-flight, overlaid at the seam */}
        <div
          className="pointer-events-none absolute"
          style={{
            top: "44%",
            left: "38%",
            zIndex: 10,
            width: "calc(50% - 24px)",
            transform: "rotate(-2deg)",
            filter: "drop-shadow(0 8px 16px rgba(14,14,25,0.14))",
          }}
        >
          <TaskCard
            label="Review design system"
            tag="Drag to Schedule"
            accent="#083f91"
            accentBg="#ebf7ff"
            delay="0s"
            ghost
          />
        </div>

        {/* Panel footer */}
        <div
          className="flex items-center justify-between px-4 py-2.5"
          style={{
            borderTop: "1px solid rgba(222,222,234,0.6)",
            background: "rgba(255,255,255,0.5)",
          }}
        >
          <span
            className="text-[9px]"
            style={{ color: "var(--support-outline)" }}
          >
            4 tasks · 2 completed
          </span>
          <span
            className="text-[9px] font-semibold"
            style={{ color: "#0d834c" }}
          >
            ↑ 12% focus score
          </span>
        </div>
      </div>

      {/* Glow bloom beneath the panel */}
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{
          width: 280,
          height: 80,
          background:
            "radial-gradient(ellipse, rgba(13,131,76,0.12) 0%, transparent 70%)",
          filter: "blur(16px)",
          animation: "glowBreathe 3s ease-in-out infinite",
          zIndex: -1,
        }}
      />
    </div>
  );
}
