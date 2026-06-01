/**
 * ImageSlide – fullscreen image display.
 *
 * Props:
 *   src      – path to the image (in /public)
 *   caption  – optional caption text at the bottom
 */
export default function ImageSlide({
  src,
  caption,
}: {
  src: string;
  caption?: string;
}) {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-black">
      <img
        src={src}
        alt={caption || ""}
        className="h-full w-full object-contain"
      />
      {caption && (
        <div className="absolute bottom-8 left-0 right-0 text-center text-sm font-light tracking-wide text-white/50">
          {caption}
        </div>
      )}
    </div>
  );
}
