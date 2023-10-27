import React from "react";
import light from "../image/light.svg";
import dark from "../image/dark.svg";

const Content = () => {
  return (
    <main className="flex items-center h-[80%]">
      <div>
        <h1 className="text-7xl text-center font-bold">Apiwat Leelasawatsuk</h1>
        <p className="text-center text-3xl font-bold mt-10">
          DarkMode Workshop
        </p>
      </div>
      <img src={light} alt="Logo" className="w-[50%]" />
    </main>
  );
};

export default Content;
