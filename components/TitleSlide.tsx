/**
 * TitleSlide – fullscreen title page with a background image overlay.
 *
 * Props:
 *   headline  – main heading text
 *   bgImage   – path to the background image (in /public)
 *   subtitle  – optional subtitle text beneath the headline
 */
export default function TitleSlide({
  headline,
  bgImage,
  subtitle,
  borderOverlay,
}: {
  headline: string;
  bgImage: string;
  subtitle?: string;
  borderOverlay?: boolean;
}) {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Dark gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

      {/* Shimmer layer */}
      <div className="title-shimmer absolute inset-0" />

      {/* Thin, rounded white line border overlay */}
      {borderOverlay && (
        <div className="absolute inset-24 pointer-events-none rounded-3xl border-2 border-white/25 z-20" />
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 px-8 text-center">
        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white drop-shadow-lg md:text-7xl lg:text-8xl">
          {headline}
        </h1>
        {subtitle && (
          <p className="max-w-2xl text-lg font-light tracking-wide text-white/70 md:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
