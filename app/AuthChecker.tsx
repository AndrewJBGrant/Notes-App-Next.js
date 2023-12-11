"use client";

import { useSession } from "next-auth/react";
import  AuthButton from "./AuthButtons";

export default async function AuthChecker({
  children,
}: {
  children: React.ReactNode;
  //                   ^?
}) {
  const { data: session, status } = useSession();



  console.log(session?.user?.name);
  // ,"/", status, "/hello we have session status");
  // console.log(session)

  if (status === "authenticated") {
    return (
      <>
        <h1>Hello from authchecker!!</h1>
        <p>Welcome back {session.user?.name}</p>
      </>
    );
  } else {
    return (
      <>
        <AuthButton />
      </>
    );
  }
}
