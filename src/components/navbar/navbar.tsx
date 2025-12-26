"use client";

import Image from "next/image";
import DashboardIcon from "../Icons/DashboardIcon";
import TaskIcon from "../Icons/TaskIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Login from "@/components/login/login";
import AuthLayout from "@/layouts/AuthLayout";
import LoginForm from "@/components/login/login";
import SignupForm from "../signup/SignupForm";
import { supabase } from "@/supabase-client";
import ThemeButtons from "../themeButtons";

const Navbar = ({ userData }: any) => {
  const pathname = usePathname();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogout = async () => {
    console.log("logout");
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("signOut Error", error);
      return;
    }
  };

  return (
    <div className="bg-half-white shadow-default">
      <div className="flex flex-row items-center justify-between">
        <div className="mr-auto flex flex-wrap items-center">
          <Link
            href="/"
            className="border-outlinevariant h-[32px] w-[87px] border-r border-solid px-1"
            title="Home"
          >
            <Image
              src="/logo.svg"
              alt="Planow Logo"
              width={87}
              height={32}
              unoptimized
              className="m-auto block"
              title="Planow Logo"
            />
          </Link>

          <Link
            href="/"
            className={`${
              pathname === "/" ? "active" : ""
            } [&.active]:bg-surfacecontainer hover:bg-surfacecontainer hover:text-backgroundbg text-backgroundbg/40 [&.active]:text-backgroundbg group border-outlinevariant flex cursor-pointer flex-wrap border-r border-solid bg-white/5 px-3 py-[6px] text-sm transition-all [&.active]:font-bold`}
            title="Dashboard"
          >
            Dashboard
          </Link>
          {/* <Link
            href="/"
            className={`${
              pathname === "/all-tasks" ? "active" : ""
            } [&.active]:bg-surfacecontainer hover:bg-surfacecontainer hover:text-backgroundbg text-backgroundbg/40 [&.active]:text-backgroundbg group border-outlinevariant flex cursor-pointer flex-wrap border-r border-solid bg-white/5 px-3 py-[6px] text-sm transition-all [&.active]:font-bold`}
            title="All Tasks"
          >
            All Tasks
          </Link>
          <Link
            href="/"
            className={`${
              pathname === "/reports" ? "active" : ""
            } [&.active]:bg-surfacecontainer hover:bg-surfacecontainer hover:text-backgroundbg text-backgroundbg/40 [&.active]:text-backgroundbg group border-outlinevariant flex cursor-pointer flex-wrap border-r border-solid bg-white/5 px-3 py-[6px] text-sm transition-all [&.active]:font-bold`}
            title="Reports"
          >
            Reports
          </Link> */}
        </div>

        {/* <div className="border-outlinevariant border-l border-solid px-2 py-[4px]">
          <ThemeSwitch />
        </div> */}

        <div className="border-outlinevariant border-l border-solid px-2 py-[4px]">
          <ThemeButtons />
        </div>

        {userData ? (
          <div className="border-outlinevariant flex gap-2 border-l border-solid px-2 py-[4px]">
            <div className="text-sm">
              Hello, {userData?.user?.user_metadata?.name}
            </div>
            <div className="cursor-pointer text-sm" onClick={handleLogout}>
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

            <AuthLayout open={showSignup} onClose={() => setShowSignup(false)}>
              <SignupForm
                setShowLogin={setShowLogin}
                setShowSignup={setShowSignup}
              />
            </AuthLayout>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
