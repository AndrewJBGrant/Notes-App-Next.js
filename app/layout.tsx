import "./globals.css";
// import Link from "next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./NavBar";
import Timer from "./timer/Timer";
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
      <body>

          {/* <!-- navigation --> */}
          <ul className="flex flex-col overflow-hidden">
            <NavBar />
          </ul>


        <div className="grid justify-items-center">
          <Timer />
          <FinalTodo />
          {children}
        </div>
      </body>
    </html>
  );
}
