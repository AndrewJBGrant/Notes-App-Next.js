"use client";

import { useEffect } from "react"
import localStorageValue from "./localStorage"

function useColorTheme() {
  const [colorTheme, setColorTheme] = localStorageValue("color-theme", "light");

  useEffect(() => {
const darkClass = "dark";
const bodyClasses = window.document.body.classList;

colorTheme === "dark"
? bodyClasses.add(darkClass)
: bodyClasses.remove(darkClass);
}, [colorTheme]);

return [colorTheme, setColorTheme]
}

export default useColorTheme;
