import React, { useState } from "react";
import Switch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Title = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header
      className={`h-[20%] flex flex-row items-center justify-around ${
        theme === "dark" ? `bg-slate-800 text-amber-500` : null
      }`}
    >
      <span className="text-4xl font-bold">Mode {theme}</span>
      <Switch
        onChange={toggleSwitch}
        checked={theme === "dark"}
        uncheckedIcon={false}
        checkedIcon={false}
        onColor={`#ffa500`}
      />
    </header>
  );
};

export default Title;
