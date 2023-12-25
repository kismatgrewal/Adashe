import React from "react";
import HeroGif from "../assets/img/hero-gif.gif";
const Hero = ({ dark, setDark }) => {
  return (
    <>
      <div className=" max-w-[1600px] mx-auto flex items-center mt-[115px] xl:flex-row flex-col max-xl:gap-[92px]  justify-between  xl:px-0 px-4">
        <div className="max-w-[630px] w-full ">
          <h1 className="text-[#4F3BE5] font-Montserrat text-[72px] font-bold">
            Data and Defi
          </h1>
          <p
            className={`mt-[10px] text-[#403A53] text-[16px] font-medium leading-[35.2px] ${
              dark ? "darkmode" : ""
            }`}
          >
            Project Adashe is building a system for data federation and
            virtualization, tied to a smart contract it can enable automatic
            execution of commands. We aim to to eliminate inefficiencies, high
            costs and restrictions in payments, transacting and record keeping,
            perpetually connecting the world of finance and data.
          </p>
          <div className="flex gap-[10px] mt-[28px]">
            <button
              type="submit"
              className="rounded-[32px] hover:scale-105 w-[187px] h-[60px] bg-[linear-gradient(93deg,#423CE3_-1.15%,#8635ED_110.24%);] text-white font-Montserrat font-bold text-[16px]"
            >
              BUY TOKEN
            </button>
            <button
              type="submit"
              className="rounded-[32px] hover:scale-105 w-[187px] h-[60px] border-[2px] border-[#4F56EF] hover:bg-[linear-gradient(93deg,#423CE3_-1.15%,#8635ED_110.24%);] text-[#5953EF] hover:text-white font-Montserrat font-bold text-[16px]"
            >
              WHITEPAPER
            </button>
          </div>
        </div>
        <div className="max-w-[808px] w-full ">
          <img className="rounded-[17px]" src={HeroGif} alt="" />
        </div>
      </div>
      <div
        className={`max-w-[1265px] w-full mx-auto flex justify-between gap-[20px] py-[45px] mt-[79px] text-center lg:flex-row flex-col text-[#5A556B] ${
          dark ? "darkmode" : ""
        }`}
      >
        <div>
          <h2 className="text-[#20187B] font-Montserrat text-[38px] font-extrabold">
            0.00044
          </h2>
          <p className=" font-Montserrat text-[16px] font-medium">
            Most recent price (ADSE)
          </p>
        </div>
        <div>
          <h2 className="text-[#20187B] font-Montserrat text-[38px] font-extrabold">
            $7000
          </h2>
          <p className=" font-Montserrat text-[16px] font-medium">
            Average purchase (USD)
          </p>
        </div>
        <div>
          <h2 className="text-[#20187B] font-Montserrat text-[38px] font-extrabold">
            9,000,000,000+
          </h2>
          <p className=" font-Montserrat text-[16px] font-medium">
            Total tokens remaining
          </p>
        </div>
        <div>
          <h2 className="text-[#20187B] font-Montserrat text-[38px] font-extrabold">
            65%
          </h2>
          <p className=" font-Montserrat text-[16px] font-medium">YOY Growth</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
