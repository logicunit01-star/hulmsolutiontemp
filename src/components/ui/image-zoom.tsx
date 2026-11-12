"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { ZoomIn, ZoomOut, Maximize2, X, RotateCcw, Move } from "lucide-react";

export interface ImageZoomProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  zoomScale?: number;
  priority?: boolean;
  loading?: "eager" | "lazy";
  className?: string;
  containerClassName?: string;
  sizes?: string;
  unoptimized?: boolean;
  showHint?: boolean;
  allowFullscreen?: boolean;
}

export function ImageZoom({
  src,
  alt,
  width,
  height,
  zoomScale = 2.4,
  priority = false,
  loading = "lazy",
  className = "",
  containerClassName = "",
  sizes,
  unoptimized = true,
  showHint = true,
  allowFullscreen = true,
}: ImageZoomProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const rafId = useRef<number | null>(null);

  // Modal zoom & pan state (desktop only)
  const [modalScale, setModalScale] = useState(1);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  // Only enable hover zoom on desktop (screen width >= 768px and pointer device)
  useEffect(() => {
    const checkDesktop = () => {
      const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      const isLargeScreen = window.innerWidth >= 768;
      setIsDesktop(hasFinePointer && isLargeScreen);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const updateTransformOrigin = useCallback((clientX: number, clientY: number) => {
    if (!containerRef.current || !imgRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, clientY - rect.top));

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    imgRef.current.style.transformOrigin = `${xPercent.toFixed(2)}% ${yPercent.toFixed(2)}%`;
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop) return;
    updateTransformOrigin(e.clientX, e.clientY);
    setIsHovered(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop) return;
    const clientX = e.clientX;
    const clientY = e.clientY;
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      updateTransformOrigin(clientX, clientY);
    });
  };

  const handleMouseLeave = useCallback(() => {
    if (!isDesktop) return;
    setIsHovered(false);
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
    if (imgRef.current) {
      imgRef.current.style.transformOrigin = "50% 50%";
    }
  }, [isDesktop]);

  // Lightbox Modal Keyboard & Body Lock (Desktop only)
  useEffect(() => {
    if (!isModalOpen) {
      setModalScale(1);
      setModalPosition({ x: 0, y: 0 });
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isModalOpen]);

  const handleModalMouseDown = (e: React.MouseEvent) => {
    if (modalScale <= 1) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX - modalPosition.x, y: e.clientY - modalPosition.y };
  };

  const handleModalMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setModalPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handleModalMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`group relative overflow-hidden rounded-2xl select-none cursor-default md:cursor-zoom-in transition-all duration-300 ${containerClassName}`}
        role="region"
        tabIndex={isDesktop ? 0 : undefined}
        aria-label={alt}
        onKeyDown={(e) => {
          if (isDesktop && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            setIsModalOpen(true);
          }
        }}
      >
        {/* Main Image - Normal static display on mobile, hardware-accelerated Shopify-style pan-zoom on desktop */}
        <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
          <Image
            ref={imgRef}
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            loading={loading}
            sizes={sizes}
            unoptimized={unoptimized}
            draggable={false}
            className={`h-auto w-full object-contain select-none md:will-change-transform ${className}`}
            style={{
              transform: isDesktop && isHovered ? `scale(${zoomScale})` : "scale(1)",
              transformOrigin: "50% 50%",
              transition: isDesktop && isHovered
                ? "transform 0.22s cubic-bezier(0.25, 1, 0.5, 1)"
                : "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform-origin 0.35s ease-out",
            }}
          />
        </div>

        {/* Hover Hint Badge - DESKTOP ONLY (hidden on mobile) */}
        {showHint && (
          <div
            className={`pointer-events-none absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 hidden md:flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium shadow-md backdrop-blur-md transition-opacity duration-300 ${
              isHovered
                ? "opacity-0"
                : "opacity-90 bg-black/65 text-white/95 border border-white/20"
            }`}
          >
            <ZoomIn className="h-3.5 w-3.5 text-[#7ae582]" />
            <span>Hover to zoom</span>
          </div>
        )}

        {/* Fullscreen Expand Action Button - DESKTOP ONLY (hidden on mobile) */}
        {allowFullscreen && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
            aria-label="Open full screen diagram"
            title="Open full screen view"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 hidden md:flex items-center gap-1.5 rounded-full bg-white/95 hover:bg-white text-zinc-700 hover:text-[#167c70] px-3 py-1.5 text-xs font-semibold shadow-md border border-zinc-200/90 backdrop-blur-sm transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Maximize2 className="h-3.5 w-3.5 text-[#167c70]" />
            <span>Full view</span>
          </button>
        )}
      </div>

      {/* Fullscreen Lightbox Modal - DESKTOP ONLY */}
      {isModalOpen && isDesktop && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-50 hidden md:flex items-center justify-center bg-black/92 backdrop-blur-md p-6 animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Top Modal Toolbar */}
          <div
            className="absolute top-5 left-6 right-6 z-20 flex items-center justify-between pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 rounded-full bg-zinc-900/85 border border-zinc-700/60 px-3.5 py-1.5 text-xs text-zinc-200 backdrop-blur-md shadow-lg">
              <span className="font-semibold text-white truncate max-w-md">
                {alt}
              </span>
              <span className="text-[#7ae582] text-[11px] font-mono">&bull; {Math.round(modalScale * 100)}%</span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1 rounded-full bg-zinc-900/85 border border-zinc-700/60 p-1 backdrop-blur-md shadow-lg">
              <button
                type="button"
                onClick={() => setModalScale((s) => Math.max(0.7, Number((s - 0.3).toFixed(1))))}
                disabled={modalScale <= 0.7}
                aria-label="Zoom out"
                className="p-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-zinc-800 disabled:opacity-30 transition-colors"
                title="Zoom out"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setModalScale(1);
                  setModalPosition({ x: 0, y: 0 });
                }}
                aria-label="Reset zoom"
                className="p-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                title="Reset zoom (100%)"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setModalScale((s) => Math.min(3.5, Number((s + 0.3).toFixed(1))))}
                disabled={modalScale >= 3.5}
                aria-label="Zoom in"
                className="p-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-zinc-800 disabled:opacity-30 transition-colors"
                title="Zoom in"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
              <div className="h-4 w-px bg-zinc-700 mx-1" />
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close full view"
                className="p-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-red-500/30 hover:text-red-200 transition-colors"
                title="Close (Esc)"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Modal Pan / Zoom Canvas */}
          <div
            className={`relative max-w-6xl max-h-[85vh] w-full h-full flex items-center justify-center overflow-hidden select-none ${
              modalScale > 1 ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "cursor-default"
            }`}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={handleModalMouseDown}
            onMouseMove={handleModalMouseMove}
            onMouseUp={handleModalMouseUp}
          >
            <div
              className="relative transition-transform duration-75 ease-out select-none flex items-center justify-center"
              style={{
                transform: `scale(${modalScale}) translate(${modalPosition.x / modalScale}px, ${
                  modalPosition.y / modalScale
                }px)`,
              }}
            >
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority
                unoptimized={unoptimized}
                draggable={false}
                className="max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl pointer-events-none"
              />
            </div>
          </div>

          {/* Floating hint on modal */}
          {modalScale > 1 && (
            <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 rounded-full bg-zinc-900/85 border border-zinc-700/60 px-3.5 py-1 text-xs text-zinc-300 backdrop-blur-md shadow-lg animate-in fade-in duration-150">
              <Move className="h-3 w-3 text-[#7ae582]" />
              <span>Click and drag to pan across details</span>
            </div>
          )}
        </div>
      )}
    </>
  );
}
