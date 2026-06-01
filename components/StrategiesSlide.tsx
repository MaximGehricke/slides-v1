/**
 * StrategiesSlide – text slide with a persistent sidebar showing all strategies.
 * The current strategy is highlighted. Right side shows the detail content.
 *
 * Props:
 *   strategies     – list of all strategy names
 *   activeIndex    – which strategy is currently highlighted (0-indexed)
 *   headline       – heading for the detail area
 *   body           – detail content (string or JSX)
 */
export default function StrategiesSlide({
  strategies,
  activeIndex,
  headline,
  body,
}: {
  strategies: string[];
  activeIndex?: number;
  headline?: string;
  body?: string | React.ReactNode;
}) {
  const isRightLarger = activeIndex !== undefined;

  return (
    <div className="flex h-screen w-screen items-stretch overflow-hidden bg-[#0a0a0a]">
      {/* Left sidebar — strategy list */}
      <div className="flex w-1/2 shrink-0 flex-col justify-center gap-4 border-r border-white/10 px-16 py-12">
        {strategies.map((name, i) => (
          <div
            key={name}
            className={`rounded-md px-6 py-4 text-3xl font-medium transition-colors ${
              activeIndex === undefined
                ? "text-white"
                : i === activeIndex
                ? "bg-accent/15 text-accent"
                : "text-white/30"
            }`}
          >
            {name}
          </div>
        ))}
      </div>

      {/* Right content area */}
      <div className="flex w-1/2 items-center px-16">
        {(headline || body) && (
          <div className="flex max-w-2xl flex-col gap-5">
            <div className="h-1 w-12 rounded-full bg-accent" />
            {headline && (
              <h2
                className={`font-bold leading-snug tracking-tight text-white ${
                  isRightLarger
                    ? "text-4xl md:text-5xl lg:text-6xl"
                    : "text-3xl md:text-4xl lg:text-5xl"
                }`}
              >
                {headline}
              </h2>
            )}
            {body && (
              <div
                className={`leading-relaxed text-white/60 ${
                  isRightLarger
                    ? "text-xl md:text-2xl"
                    : "text-lg md:text-xl"
                }`}
              >
                {body}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
