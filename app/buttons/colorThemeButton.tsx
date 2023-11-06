import { FaRegMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go"
import useColorTheme from "../hooks/colorTheme";


const ColorThemeButton = ()  => {

  const [colorTheme, setColorTheme] = useColorTheme();

return (
<button
  onClick={() => setColorTheme(colorTheme === "light" ? "dark" : "light")}
  className="navbar-icon"
>

{colorTheme === "light" ? (
   <span className="text-2xl"><FaRegMoon /></span> ) : (
   <span className="text-3xl"><GoSun /></span> )
}
</button>
)
}
export default ColorThemeButton
