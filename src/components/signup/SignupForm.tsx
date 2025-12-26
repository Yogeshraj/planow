import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import { supabase } from "@/supabase-client";

const SignupForm = ({ setShowLogin, setShowSignup }: any) => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.email || !form.name || !form.password) return;

    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          name: form.name,
        },
      },
    });

    if (error) {
      console.log("Singup Error", error);
      return;
    }
  };

  return (
    <>
      <h2 className="mb-6 text-center text-2xl font-semibold">
        Sign Up to your account
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          className="mb-3 w-full rounded-full border border-gray-200 bg-gray-100 px-4 py-3 outline-none focus:border-blue-500"
          required
        />

        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          className="mb-3 w-full rounded-full border border-gray-200 bg-gray-100 px-4 py-3 outline-none focus:border-blue-500"
          required
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Create Password"
            value={form.password}
            onChange={handleChange}
            className="w-full rounded-full border border-gray-200 bg-gray-100 px-4 py-3 pr-12 outline-none focus:border-blue-500"
            required
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <p className="mb-4 text-center text-[12px] text-gray-500">
          By signing up, you confirm that you’ve read and accepted our{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline"
            title="User Notice"
          >
            User Notice
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline"
            title="Privacy Policy"
          >
            Privacy Policy
          </a>
          .
        </p>

        <button
          type="submit"
          className="bg-meteorite-blue mb-4 w-full rounded-xl py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Register
        </button>
      </form>

      {/* <div className='text-center text-sm text-gray-400 mb-4'>OR</div>

      <button className='w-full flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-full hover:bg-gray-50 transition mb-6'>
        <Image
          width={20}
          height={20}
          src='https://www.svgrepo.com/show/355037/google.svg'
          alt='google'
        />
        Continue with Google
      </button> */}

      <div className="text-center text-sm">
        <span>Already have an account?</span>
        <button
          onClick={() => {
            setShowLogin(true);
            setShowSignup(false);
          }}
          className="ml-1 text-blue-600 hover:underline"
        >
          Log in
        </button>
      </div>
    </>
  );
};

export default SignupForm;
