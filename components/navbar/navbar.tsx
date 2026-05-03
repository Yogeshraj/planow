"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import LoginForm from "../login/login";
import SignupForm from "../signup/SignupForm";
import { supabase } from "../../lib/supabase-client";
import ThemeButtons from "../themeButtons";
import VerifyEmail from "../verifyEmail";

const Navbar = ({ userData }: any) => {
  const pathname = usePathname();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [signUpEmail, setSignUpEmail] = useState("");

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("signOut Error", error);
      return;
    }
  };

  return (
    <div className="bg-half-white shadow-default border-b-outlinevariant border-b">
      <div className="flex flex-row items-center justify-between">
        <div className="mr-auto flex flex-wrap items-center">
          <Link
            href={userData ? "/dashboard" : "/"}
            className="border-outlinevariant flex h-[32px] w-[87px] items-center justify-center border-r border-solid px-1"
            title="Home"
          >
            {/* Light Logo */}
            <Image
              src="/logo.svg"
              alt="Planow Logo"
              width={0}
              height={0}
              priority
              sizes="100vw"
              className="logo-light h-[16px] w-auto"
              unoptimized
              title="Planow Logo"
            />

            {/* Dark Logo */}
            <Image
              src="/logo-dark.svg"
              alt="Planow Logo"
              width={0}
              height={0}
              priority
              sizes="100vw"
              className="logo-dark h-[16px] w-auto"
              unoptimized
              title="Planow Logo"
            />
          </Link>

          {pathname === "/dashboard" && (
            <Link
              href="/dashboard"
              className={`${
                pathname === "/dashboard" ? "active" : ""
              } [&.active]:bg-surfacecontainer hover:bg-surfacecontainer hover:text-backgroundbg text-backgroundbg/40 [&.active]:text-backgroundbg group border-outlinevariant flex cursor-pointer flex-wrap border-r border-solid bg-white/5 px-3 py-[6px] text-sm transition-all [&.active]:font-bold`}
              title="Dashboard"
            >
              Dashboard
            </Link>
          )}
        </div>

        <div className="flex items-center">
          {pathname !== "/dashboard" && (
            <Link
              href="/dashboard"
              className="border-outlinevariant bg-backgroundbg text-background hover:bg-backgroundbg/90 border-l border-solid px-4 py-[6px] text-sm font-bold transition-all"
            >
              Launch App
            </Link>
          )}

          <div className="border-outlinevariant min-h-[32px] min-w-[85px] border-l border-solid px-2 py-[4px]">
            <ThemeButtons />
          </div>

          {userData ? (
            <div className="border-outlinevariant flex gap-2 border-l border-solid px-2 py-[4px]">
              <div className="text-backgroundbg/40 text-sm">
                Hello, {userData?.user?.user_metadata?.name}
              </div>
              <div
                className="text-backgroundbg/40 cursor-pointer text-sm"
                onClick={handleLogout}
              >
                Logout
              </div>
            </div>
          ) : (
            <>
              <div
                className="border-outlinevariant text-backgroundbg/40 cursor-pointer border-l border-solid px-3 py-[6px] text-sm"
                onClick={() => setShowLogin(true)}
              >
                Login
              </div>

              <AuthLayout open={showLogin} onClose={() => setShowLogin(false)}>
                <LoginForm
                  setShowSignup={setShowSignup}
                  setShowLogin={setShowLogin}
                />
              </AuthLayout>

              <AuthLayout
                open={showSignup}
                onClose={() => setShowSignup(false)}
              >
                <SignupForm
                  setShowLogin={setShowLogin}
                  setShowSignup={setShowSignup}
                  setSignUpEmail={setSignUpEmail}
                  setShowVerification={setShowVerification}
                />
              </AuthLayout>

              <AuthLayout
                open={showVerification}
                onClose={() => setShowVerification(false)}
              >
                <VerifyEmail
                  signUpEmail={signUpEmail}
                  setShowSignup={setShowSignup}
                  setShowVerification={setShowVerification}
                />
              </AuthLayout>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
