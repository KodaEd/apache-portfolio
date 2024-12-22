"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
}: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div
        className="relative bg-white w-full max-w-3xl mx-4 max-h-[90vh] flex flex-col shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        onClick={(e) => e.stopPropagation()}
        style={{
          border: "2px solid black",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-black px-2 py-1">
          <h2 className="text-sm font-bold text-white font-mono">{title}</h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-5 h-5 hover:bg-gray-800 text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content - with inset shadow effect */}
        <div
          className="p-6 overflow-y-auto bg-gray-100 min-h-[300px]"
          style={{
            border: "2px solid",
            borderColor: "#4A4A4A #FFFFFF #FFFFFF #4A4A4A",
          }}
        >
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div
            className="p-4 bg-gray-100 flex justify-end gap-2"
            style={{
              border: "2px solid",
              borderColor: "#4A4A4A #FFFFFF #FFFFFF #4A4A4A",
            }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

// Retro Button Component for use with the modal
export function RetroButton({
  children,
  onClick,
  variant = "default",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "primary";
}) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-1 font-mono text-sm
        border-2 bg-gray-100
        active:bg-gray-300
        ${
          variant === "primary"
            ? "bg-black text-white hover:bg-gray-900 active:bg-gray-800"
            : ""
        }
      `}
      style={{
        borderColor: "#FFFFFF #4A4A4A #4A4A4A #FFFFFF",
        boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)",
      }}
    >
      {children}
    </button>
  );
}
