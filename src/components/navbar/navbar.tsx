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
      <div className='md:container container'>
        <div className='flex flex-row py-4 justify-between'>
          <div className='flex items-center flex-wrap'>
            <Link href='/'>
              <Image
                src={Logo}
                alt='Logo'
                width={120}
                height={70}
                className='m-auto w-auto h-auto object-contain'
              />
            </Link>

            <Link href='/'>
              <div
                className={`${
                  router?.route === "/" ? "active" : ""
                } ml-14 p-2 flex flex-wrap cursor-pointer [&.active]:bg-purple hover:bg-purple hover:text-meteorite-blue rounded-[10px] transition-all after:content-[""] after:absolute after:-bottom-[17px] after:bg-purple after:w-full after:h-1 after:left-0 after:rounded-t-lg relative after:hidden [&.active]:after:block text-grey [&.active]:text-meteorite-blue group bg-white/5 border-2 border-white`}
              >
                <DashboardIcon />
                <span className='pl-2.5 font-semibold'>Dashboard</span>
              </div>
            </Link>

            {/* <Link href='/all-tasks'>
              <div
                className={`${
                  router?.route === "/all-tasks" ? "active" : ""
                } ml-5 p-2 flex flex-wrap cursor-pointer [&.active]:bg-purple hover:bg-purple hover:text-meteorite-blue rounded-[10px] transition-all after:content-[""] after:absolute after:-bottom-[17px] after:bg-purple after:w-full after:h-1 after:left-0 after:rounded-t-lg relative after:hidden [&.active]:after:block text-grey [&.active]:text-meteorite-blue group bg-white/5 border-2 border-white`}>
                <TaskIcon />
                <span className='pl-2.5 font-semibold'>All Task</span>
              </div>
            </Link> */}
          </div>

          {/* TODO: Login Menu */}
          {/* <div className='flex items-center flex-wrap'>
            <Image src={Logo} alt='Logo' />
            <div className='active ml-14 p-2 flex flex-wrap cursor-pointer [&.active]:bg-purple hover:bg-purple hover:text-meteorite-blue rounded-[10px] transition-all after:content-[""] after:absolute after:-bottom-4 after:bg-purple after:w-full after:h-1 after:left-0 after:rounded-t-lg relative after:hidden [&.active]:after:block text-grey [&.active]:text-meteorite-blue group'>
              <DashboardIcon />
              <span className='pl-2.5 font-semibold'>Dashboard</span>
            </div>
            <div className='ml-5 p-2 flex flex-wrap cursor-pointer [&.active]:bg-purple hover:bg-purple hover:text-meteorite-blue rounded-[10px] transition-all after:content-[""] after:absolute after:-bottom-4 after:bg-purple after:w-full after:h-1 after:left-0 relative after:hidden [&.active]:after:block text-grey [&.active]:text-meteorite-blue group'>
              <TaskIcon />
              <span className='pl-2.5 font-semibold'>All Task</span>
            </div>
          </div> */}

          {userData ? (
            <div className='flex flex-col'>
              <div> Hello, {userData?.user?.email}</div>
              <div className='cursor-pointer' onClick={handleLogout}>
                Logout
              </div>
            </div>
          ) : (
            <>
              <div
                className='p-2 flex flex-wrap cursor-pointer hover:bg-purple hover:text-meteorite-blue rounded-[10px] transition-all text-grey bg-white/5 border-2 border-purple'
                onClick={() => setShowLogin(true)}
              >
                <button>Login</button>
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
