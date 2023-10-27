import React from "react";
import light from "../image/light.svg";
import dark from "../image/dark.svg";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`flex items-center h-[80%] ${
        theme === "dark" ? `bg-slate-800` : null
      }`}
    >
      <div>
        <h1
          className={`text-7xl text-center font-bold ${
            theme === `dark` ? `text-slate-200` : null
          }`}
        >
          Apiwat Leelasawatsuk
        </h1>
        <p
          className={`text-center text-3xl font-bold mt-10 ${
            theme === "dark" ? `text-amber-500` : null
          }`}
        >
          LightMode Workshop
        </p>
      </div>
      <img
        src={theme === "dark" ? dark : light}
        alt="Logo"
        className="w-[50%]"
      />
    </main>
  );
};

export default Content;
