import "./globals.css";
// import Link from "next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./NavBar";
import Timer from "./timer/Timer";

import "tailwindcss/tailwind.css";
import { ClerkProvider } from "@clerk/nextjs";
import FinalTodo from "./todo/finalTodo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notes App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>
          {/* <!-- navigation --> */}
          <header>
            <NavBar />
          </header>
          <main className="grid grid-rows-3 grid-flow-col gap-6">
            <span className="row-span-3">{children}</span>
            <span className="p">
              <Timer />
              <FinalTodo />
            </span>
          </main>
        </body>
      </ClerkProvider>
    </html>
  );
}
