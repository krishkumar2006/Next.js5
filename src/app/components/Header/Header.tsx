import React from "react";
import { Rye } from "next/font/google";

const rye = Rye({
  subsets: ["latin"],
  weight: "400",
});
const Header = () => {
  return (
    <div>
      <div className="h-[134px] bg-[#A29875]">
        <h1
          className={`${rye.className} w-[439px] h-[94px] absolute top-[20px] left-[36px] text-[75px] font-normal leading-[93.75px] text-[#FFFFFF]`}
        >
          MANZZARI
        </h1>
      </div>
    </div>
  );
};

export default Header;
