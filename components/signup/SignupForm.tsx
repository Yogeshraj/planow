import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import { supabase } from "../../lib/supabase-client";
import Button from "../button";
import EnterIcon from "../Icons/EnterIcon";

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
      <h2 className="text-backgroundbg mb-6 text-center text-2xl">
        Sign Up to your account
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          className="bg-backgroundbg/5 border-backgroundbg/10 focus:border-backgroundbg/10 text-backgroundbg mb-4 w-full rounded-md border px-4 py-2.5 text-sm outline-none"
          required
        />

        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          className="bg-backgroundbg/5 border-backgroundbg/10 focus:border-backgroundbg/10 text-backgroundbg mb-4 w-full rounded-md border px-4 py-2.5 text-sm outline-none"
          required
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Create Password"
            value={form.password}
            onChange={handleChange}
            className="bg-backgroundbg/5 border-backgroundbg/10 focus:border-backgroundbg/10 text-backgroundbg w-full rounded-md border px-4 py-2.5 pr-12 text-sm outline-none"
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

        <p className="text-backgroundbg/80 mb-4 text-center text-[12px]">
          By signing up, you confirm that you’ve read and accepted our{" "}
          <a href="#" className="cursor-pointer underline" title="User Notice">
            User Notice
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="cursor-pointer underline"
            title="Privacy Policy"
          >
            Privacy Policy
          </a>
          .
        </p>

        <Button text="Register" icon={<EnterIcon />} className="mb-4" />
      </form>

      {/* <div className="text-outline after:bg-backgroundbg/8 relative mb-4 flex items-center justify-center text-center text-sm after:absolute after:top-1/2 after:left-0 after:h-px after:w-full after:content-['']">
        <span className="bg-background z-10 block px-2.5">OR</span>
      </div>

      <Button
        color="grey"
        text="Continue with Google"
        className="mb-4"
        iconPosition="left"
        icon={
          <Image
            width={20}
            height={20}
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="google"
          />
        }
      /> */}

      <div className="border-backgroundbg/8 text-backgroundbg/80 border-t pt-4 text-center text-sm">
        <span>Already have an account?</span>
        <button
          onClick={() => {
            setShowLogin(true);
            setShowSignup(false);
          }}
          className="ml-1 cursor-pointer underline"
        >
          Log in
        </button>
      </div>
    </>
  );
};

export default SignupForm;
