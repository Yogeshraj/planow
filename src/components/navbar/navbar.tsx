import Image from "next/image";
import Logo from "../../../public/logo.svg";
import DashboardIcon from "../Icons/DashboardIcon";
import TaskIcon from "../Icons/TaskIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Login from "@/components/login/login";
import AuthLayout from "@/layouts/AuthLayout";
import LoginForm from "@/components/login/login";
import SignupForm from "../signup/SignupForm";
import { supabase } from "@/supabase-client";

const Navbar = ({ userData }: any) => {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("signOut Error", error);
      return;
    }
  };

  return (
    <div className='bg-half-white shadow-default'>

      <div className='flex flex-row justify-between items-center'>
        <div className='flex items-center flex-wrap'>
          <Link href='/'>
            <Image
              src={Logo}
              alt='Planow Logo'
              width={120}
              height={70}
              className='m-auto w-auto h-auto object-contain border-r border-solid border-[#1D1A220A] px-1'
              title='Planow Logo'
            />
          </Link>

          <Link href='/' className={`${router?.route === "/" ? "active" : ""
            } text-sm px-3 py-2 flex flex-wrap cursor-pointer border-r border-solid border-[#1D1A220A] [&.active]:bg-purple hover:bg-purple hover:text-meteorite-blue transition-all  text-grey [&.active]:text-meteorite-blue group bg-white/5 `}>
            Dashboard
          </Link>
          {/* <Link href='/' className={`${router?.route === "/all-tasks" ? "active" : ""
            } text-sm px-3 py-2 flex flex-wrap cursor-pointer border-r border-solid border-[#1D1A220A] [&.active]:bg-purple hover:bg-purple hover:text-meteorite-blue transition-all  text-grey [&.active]:text-meteorite-blue group bg-white/5 `}>
            All Tasks
          </Link>
          <Link href='/' className={`${router?.route === "/reports" ? "active" : ""
            } text-sm px-3 py-2 flex flex-wrap cursor-pointer border-r border-solid border-[#1D1A220A] [&.active]:bg-purple hover:bg-purple hover:text-meteorite-blue transition-all  text-grey [&.active]:text-meteorite-blue group bg-white/5 `}>
            Reports
          </Link> */}
        </div>

        {userData ? (
          <div className='flex gap-2'>
            <div className='text-sm'> Hello, {userData?.user?.email}</div>
            <div className='cursor-pointer text-sm' onClick={handleLogout}>
              Logout
            </div>
          </div>
        ) : (
          <>
            <div className='cursor-pointer text-sm px-3' onClick={() => setShowLogin(true)}>Login</div>

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
