import { FaFrog, FaGhost, FaSpaghettiMonsterFlying } from "react-icons/fa6";

  function ServerComponent() {
  async function myAction() {
    'use server'
    // ...
  }
}

const NavBar = () => {
  return (
    <div className="fixed top-0 h-screen w-16 left-0 m-0 flex flex-col bg-primary text-white shadow-sm">
      <i>A</i>
      <i>B</i>
      <i>C</i>
      <NavBarIcon icon={FaFrog} />
    </div>
  );
};

const NavBarIcon = ({ icon }: any) =>  (
  <div className="sidebar-icon">{icon}</div>
);

export default NavBar;
