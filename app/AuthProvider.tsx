"use client";

import { SessionProvider } from "next-auth/react";

type authProps = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: authProps) {
  //                                                  ^?
  return(
  <SessionProvider>
    {children}
  </SessionProvider>
  )
};
