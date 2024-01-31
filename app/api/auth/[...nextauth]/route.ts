import NextAuth, { type  NextAuthOptions } from "next-auth";

import { CredentialsProvider } from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/app/lib/prisma";
import { signIn } from "next-auth/react";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // GithubProvider({
      // clientId: process.env.GITHUB_ID!,
      // clientSecret: process.env.GITHUB_SECRET!,
    // }),
//     CredentialsProvider({
//       name: "Sign in",
//       credentials: {
//         email: {
//           laber: "Email",
//           type: "email",
//           placeholder: "hello@examplemail.com"
//         },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
// const userExample = { id: "1", :}

//       }
//     })
  ],
};


// console.log(authOptions.jwt, "JWT FROM route.ts");
// console.log(authOptions.session, "session")

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
