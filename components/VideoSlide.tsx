"use client";

import { useRef, useEffect } from "react";

/**
 * VideoSlide – fullscreen autoplaying, looping video.
 *
 * Props:
 *   src      – path to the video file (in /public)
 *   poster   – optional poster image path
 */
export default function VideoSlide({
  src,
  poster,
}: {
  src: string;
  poster?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure the video plays even if autoplay is blocked
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay was prevented; user interaction required
      });
    }
  }, []);

  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}
