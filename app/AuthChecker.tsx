"use client";

import { useSession } from "next-auth/react";
import { SignInButton } from "./Buttons";

export default async function AuthChecker({
  children,
}: {
  children: React.ReactNode;
  //                   ^?
}) {
  const { data: session, status } = useSession();

 console.log(session?.user?.name)
  // ,"/", status, "/hello we have session status");
  // console.log(session)

  if (status === "authenticated") {
    return <>{children}</>;
  } else {
    return (
      <>
      <h1>Once again these client errors</h1>
        {/* <SignInButton /> */}
      </>
    );
  }
}
