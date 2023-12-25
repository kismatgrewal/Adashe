import React from "react";
import sideimg from "../assets/img/buy-token-img.png";
import logo from "../assets/img/logo1.png";
import { RightarrowIcon } from "./common/Icon";

const Buytoken = () => {
  return (
    <div className="flex flex-col xl:flex-row relative h-[960px]">
      <div>
        <a href="">
          <img
            src={logo}
            alt="logo"
            className="w-[171px] h-[47px] sm:w-[271px] sm:h-[77px] absolute top-[14px] left-[17px] sm:top-[34px] sm:left-[37px]"
          />
        </a>
      </div>
      <div className="w-full xl:w-[50%]">
        <img src={sideimg} alt="side-img" className="w-full xl:h-[960px]" />
      </div>
      <div className="pt-[106px] max-w-[604px] w-full pb-[70px] sm:pb-[100px] md:pb-[150px] lg:pb-[200px] xl:pb-[270px] 2xl:pb-[316px] mx-auto px-3 flex flex-col gap-[41px]">
        <div className="flex flex-col gap-[7px]">
          <h2 className="text-bluemagenta text-[25px] leading-[37px] sm:text-[45px] sm:leading-[57px] font-bold font-montserrat">
            Buy Token
          </h2>
          <p className="text-black text-[16px] leading-[32px] font-montserrat font-normal">
            We're here to help! Please feel free to contact us with any
            questions or feedback you have.
          </p>
        </div>
        <div className="flex flex-col gap-[14px]">
          <div className="flex flex-col gap-[7px]">
            <h2 className="text-bluemagenta text-[25px] leading-[37px] sm:text-[45px] sm:leading-[57px] font-bold font-montserrat">
              Buy Token
            </h2>
            <p className="text-black text-[16px] leading-[32px] font-montserrat font-normal">
              We're here to help! Please feel free to contact us with any
              questions or feedback you have.
            </p>
          </div>
          <div>
            <button
              type="submit"
              className="flex gap-3 items-center justify-center w-[150px] h-[45px] md:w-[188px] font-jost text-[14px] md:text-[16px] leading-[24px] font-medium md:h-[55px] text-white bg-[linear-gradient(102deg,#4B3BE4_14.26%,#7836EB_66.64%)] rounded-[30px] border border-transparent"
            >
              Raze Finance
              <RightarrowIcon />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[14px]">
          <div className="flex flex-col gap-[7px]">
            <h2 className="text-bluemagenta text-[25px] leading-[37px] sm:text-[45px] sm:leading-[57px] font-bold font-montserrat">
              For Int Citizen Only
            </h2>
            <p className="text-black text-[16px] leading-[32px] font-montserrat font-normal">
              We're here to help! Please feel free to contact us with any
              questions or feedback you have. We're here to help! Please feel
              free to contact us with any questions or feedback you have.
            </p>
          </div>
          <div>
            <button
              type="submit"
              className="flex gap-3 items-center justify-center w-[180px] h-[45px] md:w-[220px] text-[14px] font-jostmd:text-[16px] leading-[24px] font-medium md:h-[55px] text-white bg-[linear-gradient(102deg,#4B3BE4_14.26%,#7836EB_66.64%)] rounded-[30px] border border-transparent"
            >
              Pink Sale Finance
              <RightarrowIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buytoken;
