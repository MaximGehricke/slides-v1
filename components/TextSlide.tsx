/**
 * TextSlide – standard content slide with headline + body text.
 *
 * Props:
 *   headline – slide heading
 *   body     – paragraph or rich text content
 */
export default function TextSlide({
  headline,
  body,
}: {
  headline: string;
  body: string | React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-[#0a0a0a] px-8">
      <div className="flex max-w-3xl flex-col gap-6">
        {/* Accent bar */}
        <div className="h-1 w-16 rounded-full bg-accent" />

        <h2 className="text-4xl font-bold leading-snug tracking-tight text-white md:text-5xl lg:text-6xl">
          {headline}
        </h2>

        <div className="text-lg leading-relaxed text-white/70 md:text-xl">
          {body}
        </div>
      </div>
    </div>
  );
}
