import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import NavBar from "./NavBar";
import Timer from "./timer/Timer";

import "tailwindcss/tailwind.css";
import FinalTodo from "./todo/TodoPage";
import AuthProvider from "./AuthProvider";

import TitleTime from "./TitleTime";




const inter = Roboto({
  subsets: ["latin"],
  weight: "500"
});

export const metadata: Metadata = {
  // title: "FocusNotes",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en" className={inter.className}>

       <title>
        <TitleTime />
      </title>


        <body className="grid grid-cols-9 gap-1 relative bg-main dark:bg-slate-800 text-text-color">
          <header className="col-span-1">
            <NavBar />
          </header>

          {/* <!-- navigation --> */}
          <main className="col-start-2 col-end-7">
            <section>{children}</section>
          </main>
          <aside className="col-start-7 col-end-10 fixed m-4">
            <Timer />
            <FinalTodo />
          </aside>
        </body>
      </html>
    </AuthProvider>
  );
}
