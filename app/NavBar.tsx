"use client";
import NavLink from "./nav-link";
import { FaFrog, FaGhost, FaSackDollar } from "react-icons/fa6";
import { useState } from "react";
//   function ServerComponent() {
//   async function myAction() {
//     'use server'
//     // ...
//   }
// }

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const dayNames = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
  const day = today.getDay();
  // console.log(day)
  const currentDay = dayNames[day];
  return (
    <div className="grid justify-items-center">
      <span className="text-2xl">{date}</span>
      {currentDay}
    </div>
  );
}

// function getTime() {
//    const today = new Date();
//   const month = today.getMonth() + 1;
//   const year = today.getFullYear();
//   const date = today.getDate();
//   const time = Math.floor(Date.now() / 1000)
// return (
// )

// }


const NavBarIcon = ({ icon, text }: any) => (
  <div className="navbar-icon group">

    {icon}
    <span className="navbar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const NavBar = () => {
  const [currentDate, setCurrentDate] = useState(getDate());
  // const [currentTime, setCurrentTime] = useState(getTime());


  return (
    <div className="fixed top-0 h-screen w-1 left-0 m-4 flex flex-col text-white shadow-sm">
      <div className="navbar-icon group">{currentDate}
      {/* <span className="navbar-tooltip group-hover:scale-100">{currentTime}</span> */}
      </div>
      <NavLink href="/">
       <NavBarIcon icon={<FaFrog />} text={"Home"} />
      </NavLink>
      <NavLink href="notes">
        <NavBarIcon text={"Notes"} icon={<FaGhost />} />
      </NavLink>
      <NavLink href="journal">
      <NavBarIcon icon={<FaSackDollar />}  text={"Journal"} />
      </NavLink>
    </div>
  );
};

export default NavBar;
