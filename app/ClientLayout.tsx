"use client";

import Navbar from "../components/navbar/navbar";
import useGetSessionData from "../hooks/useGetSessionData";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useGetSessionData();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (session?.user && pathname === "/") {
      router.replace("/dashboard"); // replace prevents history stacking
    }
  }, [session, pathname, router]);

  return (
    <>
      <Navbar userData={session} />
      {children}
    </>
  );
}
