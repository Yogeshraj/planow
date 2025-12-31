import React, { ChangeEvent, FormEvent, useState } from "react";
import { supabase } from "../../lib/supabase-client";
import Button from "../button";
import EnterIcon from "../Icons/EnterIcon";

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
      <h2 className="text-backgroundbg mb-6 text-center text-2xl">
        Login to your account
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email"
          className="bg-backgroundbg/5 border-backgroundbg/10 focus:border-backgroundbg/10 text-backgroundbg mb-4 w-full rounded-md border px-4 py-2.5 text-sm outline-none"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          value={email}
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setpassword(e.target.value)
            }
            className="bg-backgroundbg/5 border-backgroundbg/10 focus:border-backgroundbg/10 text-backgroundbg w-full rounded-md border px-4 py-2.5 pr-12 text-sm outline-none"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <Button text="Continue" icon={<EnterIcon />} className="mb-4" />
      </form>

      {signInError && (
        <div className="mb-4 text-center text-red-700">{signInError}</div>
      )}

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
        <span>Don’t have an account?</span>
        <button
          onClick={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
          className="ml-1 cursor-pointer underline"
        >
          Sign up
        </button>
      </div>
    </>
  );
};

export default LoginForm;
