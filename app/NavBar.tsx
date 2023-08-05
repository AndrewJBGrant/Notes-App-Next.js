'use client'
import Link from 'next/link'
import { FaFrog, FaGhost, FaSackDollar, FaSpaghettiMonsterFlying } from "react-icons/fa6";
//   function ServerComponent() {
//   async function myAction() {
//     'use server'
//     // ...
//   }
// }
const NavBarIcon = ({ icon }: any) =>  (
  <div className="navbar-icon">{icon}</div>
);

const NavBar = () => {
  return (
    <div className="fixed top-0 h-screen w-1 left-0 m-8 flex flex-col text-white shadow-sm active:bg-violet-700">
      <Link href='/'><NavBarIcon icon={< FaFrog />} /></Link>
     <Link href='notes'><NavBarIcon icon={<FaGhost />} /></Link>
      <NavBarIcon icon={< FaSackDollar />} />
      <NavBarIcon icon={< FaSpaghettiMonsterFlying />} />
    </div>
  );
};


export default NavBar;
