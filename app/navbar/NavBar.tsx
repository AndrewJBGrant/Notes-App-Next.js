"use client";
import NavLink from "./nav-link";
// import AuthButton from "../auth/AuthButtons";


export function getDate() {
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

const NavBarIcon = ({ icon, title, text }: any) => (
  <div className="navbar-icon group">
    {title}
    {icon}
    <span className="navbar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const NavBar = () => {
  const currentDate = getDate();
  // const [currentTime, setCurrentTime] = useState(getTime());

  return (
    <div className="fixed top-0 h-screen m-4 flex flex-col text-main">
      {/* <div className="navbar-icon group">
        {currentDate}
        {/* <span className="navbar-tooltip group-hover:scale-100">{currentTime}</span> */}
      {/* </div> */}
      {/* <NavLink href="/">
        <NavBarIcon title={"Home"} />
      </NavLink> */}
      {/* <NavLink href="journal">
        <NavBarIcon
          title={"Journal"}
          text={"A place to keep track of your thoughts and progress"}
        />
      </NavLink> */}
{/*
       <NavLink href="#">
        DARK MODE
      </NavLink> */}
      {/* <AuthButton /> */}
    </div>
  );
};

export default NavBar;
