import { supabase } from "@/lib/supabase-client";
import React, { useEffect, useState } from "react";
import Button from "../button";

const VerifyEmail = ({
  signUpEmail,
  setShowSignup,
  setShowVerification,
}: {
  signUpEmail: string;
  setShowSignup: (showSignup: boolean) => void;
  setShowVerification: (showVerification: boolean) => void;
}) => {
  const [isResending, setIsResending] = useState(false);

  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;

    const timer = setInterval(() => {
      setCooldown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [cooldown]);

  const handleResend = async () => {
    if (cooldown > 0) return;
    setIsResending(true);

    const { error } = await supabase.auth.resend({
      type: "signup",
      email: signUpEmail,
    });

    if (!error) {
      setCooldown(30);
    }
    setIsResending(false);
  };

  const handleChangeEmail = () => {
    setShowVerification(false);
    setShowSignup(true);
  };

  return (
    <div className="mx-auto w-full max-w-md px-6 pt-4 pb-8 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600">
        ✓
      </div>
      <h2 className="text-backgroundbg mb-2 text-xl font-semibold">
        Account created
      </h2>
      <p className="text-backgroundbg/80 mb-4 text-sm">
        We’ve sent a confirmation link to
      </p>
      <p className="text-backgroundbg mb-6 text-sm font-medium break-all">
        {signUpEmail}
      </p>

      <p className="text-backgroundbg/80 mb-6 text-sm">
        Please check your inbox and click the link to activate your account.
      </p>

      <Button
        text={cooldown > 0 ? `Resend in ${cooldown}s` : "Resend email"}
        loading={isResending}
        onClick={handleResend}
        className="mb-4"
      />

      <button
        onClick={handleChangeEmail}
        className="text-backgroundbg/80 hover:text-backgroundbg w-full text-sm underline"
      >
        Change email
      </button>

      <p className="text-backgroundbg/80 mt-6 text-xs">
        Didn’t get the email? Check your spam folder.
      </p>
    </div>
  );
};

export default VerifyEmail;
