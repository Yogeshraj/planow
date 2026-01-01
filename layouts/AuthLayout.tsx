import React, { ReactNode, useEffect } from "react";
import Image from "next/image";

interface AuthLayoutProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const AuthLayout = ({ open, onClose, children }: AuthLayoutProps) => {
  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (open) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* OVERLAY */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 backdrop-blur-md ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* MODAL */}
      <div
        className={`bg-background relative w-[380px] transform rounded-3xl p-5 text-[#1a1a1a] shadow-2xl transition-[opacity,transform] duration-200 ease-out ${open ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer text-gray-400 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Logo */}
        <div className="mb-6 text-center">
          {/* Light Logo */}
          <Image
            src="/logo.svg"
            alt="Planow Logo"
            width={105}
            height={24}
            priority
            className="logo-light m-auto"
            unoptimized
            title="Planow Logo"
          />

          {/* Dark Logo */}
          <Image
            src="/logo-dark.svg"
            alt="Planow Logo"
            width={105}
            height={24}
            priority
            className="logo-dark m-auto"
            unoptimized
            title="Planow Logo"
          />
        </div>

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
