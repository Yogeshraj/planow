import React from "react";
import Button from "../button";
import Image from "next/image";
import { supabase } from "../../lib/supabase-client";

const GoogleAuth = ({
  setShowLogin,
}: {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleGoogleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.log("Google Login Error", error);
      return;
    }
    setShowLogin(false);
  };

  return (
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
      onClick={handleGoogleLogin}
    />
  );
};

export default GoogleAuth;
