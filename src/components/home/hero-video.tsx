"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface HeroVideoProps {
  src?: string;
  mobileSrc?: string;
  poster?: string;
  alt?: string;
  className?: string;
}

export function HeroVideo({
  src = "/videos/hulm-pos-hero.mp4",
  mobileSrc = "/videos/hulm-pos-hero.mp4",
  poster = "/images/home/hero-video-poster.webp",
  alt = "Hulm POS cloud cashier terminal with instant checkout, inventory and multi-branch management interface",
  className = "",
}: HeroVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // 1. Respect user preference for reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      return;
    }

    // 2. Respect Data-Saver mode to save user bandwidth
    const connection = (navigator as unknown as { connection?: { saveData?: boolean } })
      .connection;
    if (connection?.saveData) {
      return;
    }

    // 3. Defer loading video until main thread / hydration is idle
    // This guarantees 0 impact on LCP and Initial Page Speed
    let idleId: number | ReturnType<typeof setTimeout>;

    const startLoading = () => {
      setShouldLoadVideo(true);
    };

    if ("requestIdleCallback" in window) {
      idleId = (window as Window).requestIdleCallback(startLoading, {
        timeout: 1500,
      });
    } else {
      idleId = setTimeout(startLoading, 200);
    }

    return () => {
      if ("cancelIdleCallback" in window && typeof idleId === "number") {
        (window as Window).cancelIdleCallback(idleId);
      } else {
        clearTimeout(idleId as ReturnType<typeof setTimeout>);
      }
    };
  }, []);

  // 4. Pause video when out of viewport or when tab is hidden to save CPU/GPU/battery
  useEffect(() => {
    if (!shouldLoadVideo) return;

    const videoEl = videoRef.current;
    const containerEl = containerRef.current;
    if (!videoEl || !containerEl) return;

    const handleVisibility = () => {
      if (document.hidden) {
        if (!videoEl.paused) videoEl.pause();
      } else if (containerEl) {
        const rect = containerEl.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView && videoEl.paused) {
          videoEl.play().catch(() => {});
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (videoEl.paused) {
              videoEl.play().catch(() => {});
            }
          } else {
            if (!videoEl.paused) {
              videoEl.pause();
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(containerEl);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [shouldLoadVideo]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden flex items-center justify-center ${className}`}
    >
      {/* 
        Instant LCP poster image:
        Loaded with high priority so Largest Contentful Paint completes immediately (under 1s).
      */}
      <Image
        src={poster}
        alt={alt}
        width={1400}
        height={1060}
        priority
        fetchPriority="high"
        sizes="(min-width: 1280px) 680px, (min-width: 1024px) 50vw, (min-width: 640px) 576px, calc(100vw - 32px)"
        className={`w-full h-full object-contain select-none transition-opacity duration-500 ${
          isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />

      {/* 
        Deferred animated hero video:
        Loaded only after hydration & idle to protect performance metrics and network bandwidth.
      */}
      {shouldLoadVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          disableRemotePlayback
          aria-label={alt}
          onPlaying={() => setIsPlaying(true)}
          className={`absolute inset-0 w-full h-full object-contain rounded-xl sm:rounded-2xl transition-opacity duration-500 ${
            isPlaying ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={src} type="video/mp4" />
          <source src="/videos/hulm-pos-hero.webm" type="video/webm" />
        </video>
      )}
    </div>
  );
}
