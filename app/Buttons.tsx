"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";



export function SignInButton() {
const { data: session, status} = useSession();
console.log(session, status)

if (status === 'loading') {
  return <>....Loading!!!</>
};

if (status === 'authenticated') {
  return <Link href={`/`}>
{session.user?.name}
  </Link>
}




  return <button className="text-green-900" onClick={() => signIn()}>Sign in</button>
}
export function SignOutButton() {
  return <button className="border " onClick={() => signOut()}>Sign out</button>
  // Built in Next Auth signOut function
}


// Creating different button components to have only one 'use client' file
