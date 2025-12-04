import React, { ReactNode, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/logo.svg";

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
        className={`relative w-[380px] bg-white rounded-[20px] p-8 shadow-2xl text-[#1a1a1a]
        transform transition-[opacity,transform] duration-200 ease-out
        ${open ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-400 hover:text-gray-700'
        >
          ✕
        </button>

        {/* Logo */}
        <div className='text-center mb-6'>
          <Image
            src={Logo}
            alt='Logo'
            width={120}
            height={40}
            className='m-auto w-auto h-auto object-contain'
          />
        </div>

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
