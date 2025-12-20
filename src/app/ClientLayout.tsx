"use client";

import Navbar from "@/components/navbar/navbar";
import useGetSessionData from "@/hooks/useGetSessionData";
import React from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useGetSessionData();

  return (
    <>
      <Navbar userData={session} />
      {children}
    </>
  );
}
