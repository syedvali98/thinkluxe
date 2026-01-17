"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ImageViewerProps {
  src: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex?: number;
  totalImages?: number;
}

export default function ImageViewer({
  src,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalImages,
}: ImageViewerProps) {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.5, 4));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.5, 1));
  const handleReset = () => setZoom(1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 p-2 text-white/70 hover:text-white transition-colors"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Image counter */}
      {currentIndex !== undefined && totalImages !== undefined && (
        <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <span className="text-white/90 text-sm font-medium">
            {currentIndex + 1} / {totalImages}
          </span>
        </div>
      )}

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-4 bg-black/60 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-white/10">
        <button
          onClick={(e) => { e.stopPropagation(); handleZoomOut(); }}
          className="p-2 text-white/70 hover:text-white transition-colors disabled:opacity-30"
          title="Zoom out"
          disabled={zoom <= 1}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
          </svg>
        </button>
        <span className="text-white/70 text-sm min-w-[60px] text-center">{Math.round(zoom * 100)}%</span>
        <button
          onClick={(e) => { e.stopPropagation(); handleZoomIn(); }}
          className="p-2 text-white/70 hover:text-white transition-colors disabled:opacity-30"
          title="Zoom in"
          disabled={zoom >= 4}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
          </svg>
        </button>
        <div className="w-px h-5 bg-white/20" />
        <button
          onClick={(e) => { e.stopPropagation(); handleReset(); }}
          className="p-2 text-white/70 hover:text-white transition-colors"
          title="Reset zoom"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      {/* Previous button */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 text-white/70 hover:text-white transition-colors bg-black/40 rounded-full"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 text-white/70 hover:text-white transition-colors bg-black/40 rounded-full"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scrollable Image Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute inset-0 overflow-auto flex items-center justify-center"
        style={{ cursor: zoom > 1 ? "grab" : "default" }}
      >
        <img
          src={src}
          alt="Gallery image"
          className="transition-transform duration-200 ease-out"
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: "center center",
            maxWidth: "90vw",
            maxHeight: "85vh",
            objectFit: "contain",
          }}
        />
      </div>
    </motion.div>
  );
}
