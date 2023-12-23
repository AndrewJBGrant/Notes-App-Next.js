"use client";

import { getServerSession } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { authOptions } from "../api/auth/[...nextauth]/route";

type authProps = {
  children: React.ReactNode;
};

const data = await getServerSession(authOptions);

console.log(authOptions, data, "here WE HAVE DATA!!!");

export default function AuthProvider({ children }: authProps) {
  //                                                  ^?
  return <SessionProvider>{children}</SessionProvider>;
}
