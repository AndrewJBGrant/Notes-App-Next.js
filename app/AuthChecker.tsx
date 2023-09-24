"use client"

import { useSession } from "next-auth/react";
import { SignInButton } from "./Buttons";

export default function AuthChecker({ children }: { children: React.ReactNode }) {
//                                      ^?

const { data: session, status } = useSession();

console.log(session?.user?.name
,"/", status, "/hello we have session status");

if (status === "authenticated") {
  return <>
          <p>Welcome back {session.user?.name}</p>
         </>
         } else {
          return <>
          <SignInButton />
          </>;
         }
}
