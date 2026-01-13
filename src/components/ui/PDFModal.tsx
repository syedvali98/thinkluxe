"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

export default function PDFModal({ isOpen, onClose, pdfUrl, title }: PDFModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when modal opens with new PDF
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
    }
  }, [isOpen, pdfUrl]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full sm:h-[90vh] md:h-[85vh] sm:max-w-5xl bg-[#0a0a0a] rounded-none sm:rounded-2xl md:rounded-3xl overflow-hidden border-0 sm:border border-[#C9A962]/30 shadow-[0_0_50px_rgba(201,169,98,0.15)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-transparent">
              <h3 className="font-serif text-base sm:text-xl md:text-2xl text-[#C9A962] truncate max-w-[50%] sm:max-w-none">
                {title}
              </h3>
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Download Button */}
                <a
                  href={pdfUrl}
                  download={`${title}.pdf`}
                  className="flex items-center justify-center gap-2 w-9 h-9 sm:w-auto sm:h-auto sm:px-4 sm:py-2 rounded-full border border-[#C9A962]/40 text-[#C9A962] text-sm hover:bg-[#C9A962]/10 transition-colors"
                  title="Download"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  <span className="hidden sm:inline">Download</span>
                </a>

                {/* Open in New Tab */}
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-9 h-9 sm:w-auto sm:h-auto sm:px-4 sm:py-2 rounded-full border border-[#C9A962]/40 text-[#C9A962] text-sm hover:bg-[#C9A962]/10 transition-colors"
                  title="Open in new tab"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  <span className="hidden sm:inline">Open</span>
                </a>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="w-full h-full pt-14 sm:pt-16 relative">
              {/* Loading Spinner */}
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0a] z-10">
                  <div className="relative w-16 h-16">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#C9A962]/20" />
                    {/* Spinning ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#C9A962] animate-spin" />
                  </div>
                  <p className="mt-4 text-[#b5b5b5] text-sm">Loading catalog...</p>
                </div>
              )}

              {/* Only render iframe when modal is open (lazy load) */}
              {pdfUrl && (
                <iframe
                  src={`${pdfUrl}#toolbar=0&navpanes=0`}
                  className={`w-full h-full transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                  title={title}
                  onLoad={() => setIsLoading(false)}
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
