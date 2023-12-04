"use client";

import { useSession } from "next-auth/react";
import { SignInButton } from "./Buttons";

export default function AuthChecker({
  children,
}: {
  children: React.ReactNode;
}) {
  //                                      ^?

  const { data: session, status } = useSession();

  // console.log(session?.user?.name
  // ,"/", status, "/hello we have session status");
  // console.log(session)

  if (status === "authenticated") {
    return (
      <>
        <p>Welcome back {session.user?.name}</p>
        <p>Will expire: {session.expires}</p>
        <p>email:{session.user?.email}</p>
      </>
    );
  } else {
    return (
      <>

Welcome to focus Notes a quiet corner of the net
Use a quick note to something down quick.

A journal enrty to keep track of your daily progress/ideas etc...

A pomodoro timer is a great way to stay focused while making sure to give yourself enough breaks

And a todo list to stay on top of daily tasks


        <SignInButton />
      </>
    );
  }
}
