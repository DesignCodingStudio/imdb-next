"use client";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mount, setMount] = useState(false);

  useEffect(() => setMount(true), []);

  return (
    <div>
      {currentTheme === "dark" ? (
        <MdLightMode
          onClick={() => setTheme("light")}
          className=" text-xl cursor-pointer hover:text-amber-400"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme("dark")}
          className=" text-xl cursor-pointer hover:text-amber-400"
        />
      )}
    </div>
  );
};

export default DarkModeSwitch;
