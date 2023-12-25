import React from "react";
import { smartcontractData } from "./common/Helper";


const Smartcontract = () => {
  return (
    <div className="max-w-[1599px] w-full mx-auto flex flex-col gap-[72px] pt-[50px] sm:pt-[70px] md:pt-[90px] xl:pt-[100px] 2xl:pt-[139px] pb-[50px] sm:pb-[70px] md:pb-[100px] xl:pb-[120px] 2xl:pb-[171px] px-3">
      <div className="max-w-[570px] flex flex-col gap-[10px] sm:pl-[28px] pb-[14px] max-xl:mx-auto">
        <h2 className="text-bluemagenta font-montserrat font-bold text-[37px] leading-[45px] sm:text-[45px] sm:leading-[53px] md:text-[50px] md::leading-[58px] xl:text-[60px] xl:leading-[68px]">
          Smart Contract
        </h2>
        <p className="text-caddiessilk font-montserrat font-medium text-[15px] leading-[33px]">
          Adashe is a seamless fusion of Tradefi, DeFi, and Data systems, It is
          the future of Money, It is available across multiple Blockchains.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[50px] max-xl:mx-auto justify-center">
        {smartcontractData.map((items, index) => (
          <div className="flex gap-[18px] max-w-[363px] w-full" key={index}>
            <div>{items.icon}</div>
            <div className="flex flex-col gap-[6px]">
              <p className="text-midnightblue font-bold font-montserrat text-[20px] leading-[44px]">
                {items.name}
              </p>
              <p className="text-freefall font-montserrat font-medium text-[14px] leading-[26px]">
                {items.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Smartcontract;