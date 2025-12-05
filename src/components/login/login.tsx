import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import { supabase } from "@/supabase-client";

// xorey23512@besenica.com
// test123

const LoginForm = ({ setShowSignup, setShowLogin }: any) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [signInError, setSignInError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return;

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.log("Singup Error", error);
      setSignInError(error?.message);
      return;
    }
    setShowLogin(false);
  };

  return (
    <>
      <h2 className='text-center text-2xl font-semibold mb-6'>
        Login to your account
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Your email'
          className='w-full bg-gray-100 border border-gray-200 rounded-full px-4 py-3 mb-4 outline-none focus:border-blue-500'
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          value={email}
        />

        <div className='relative mb-4'>
          <input
            type={showPassword ? "text" : "password"}
            name='password'
            placeholder='Create Password'
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setpassword(e.target.value)
            }
            className='w-full bg-gray-100 border border-gray-200 rounded-full px-4 py-3 outline-none focus:border-blue-500 pr-12'
          />

          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <button className='w-full bg-meteorite-blue hover:bg-blue-700 text-white transition py-3 font-semibold mb-4 rounded-xl'>
          Continue
        </button>
      </form>

      {signInError && (
        <div className='mb-4 text-center text-red-700'>{signInError}</div>
      )}

      {/* <div className='text-center text-sm text-gray-400 mb-4'>OR</div>

      <button className='w-full flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-full hover:bg-gray-50 transition mb-3'>
        <Image
          width={20}
          height={20}
          src='https://www.svgrepo.com/show/355037/google.svg'
          alt='google'
        />
        Continue with Google
      </button>

      <button className='w-full flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-full hover:bg-gray-50 transition mb-6'>
        <Image
          width={20}
          height={20}
          src='https://www.svgrepo.com/show/448224/facebook.svg'
          alt='facebook'
        />
        Continue with Facebook
      </button> */}

      <div className='text-center text-sm'>
        <span>Don’t have an account?</span>
        <button
          onClick={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
          className='ml-1 text-blue-600 hover:underline'
        >
          Sign up
        </button>
      </div>
    </>
  );
};

export default LoginForm;
