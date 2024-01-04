// import { useSession, signIn, signOut } from "next-auth/react";

// export function AuthButton() {
//   const { data: session, status } = useSession();
//   //console.log(session, status)

//   if (session) {
//     return (
//       <>
//         <button
//           className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
//           onClick={() => signOut()}
//         >
//           Sign out
//         </button>{" "}
//       </>
//     );
//   }

//   return (
//     <button
//       className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
//       onClick={() => signIn()}
//     >
//       Sign in
//     </button>
//   );
// }

// export function SignOutButton() {
//   return <button onClick={() => signOut()}>Sign out</button>;
//   // Built in Next Auth signOut function
// }

// Creating different button components to have only one 'use client' file

// export default AuthButton;
