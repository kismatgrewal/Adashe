import React, { useState } from "react";
import { iconsData } from "./common/Helper";


const Projectadashe = () => {
  const [less, setLess] = useState(false);
  const toggleButton = () => {
    setLess(!less);
  };
  return (
    <div className="bg-gray-500/10 px-3 py-[50px] sm:py-[80px] md:py-[100px] xl:py-[150px] 2xl:py-[216px]">
      <div className="max-w-[1586px] w-full mx-auto flex flex-col gap-[72px] ">
        <div>
          <h2 className="text-bluemagenta font-montserrat font-bold text-[37px] leading-[45px] sm:text-[45px] sm:leading-[53px] md:text-[50px] md::leading-[58px] xl:text-[60px] xl:leading-[68px] h-[73px]">
            Project Adashe
          </h2>
          <div className="max-w-[1532px] w-full flex flex-col gap-[9px] mt-[10px]">
            <p className="text-caddiessilk font-montserrat font-medium text-[15px] leading-[33px]">
              {less
                ? "Adashe is a seamless fusion of Tradefi, DeFi, and Data systems, It is the future of Money, It is available across multiple Blockchains. Developed by crypto pioneers, aerospace inventors, engineers, data scientist and tech leaders, Adashe establishes a standardized industry framework for trade, finance, data and for adoption of blockchain and crypto.  Adabase is a federated data solution which will allow for robust and real time interactions of and with data from an endless stream of sources. Supply chains, performance data tracking and automated execution of commands specific to user and situation are all uses, giving users a detailed snapshot and the ability to respond faster and more precisely. Our crypto currency lubricates the ecosystem and serves as payment for interactions at predetermined intervals. Enterprise and non-enterprise users can interact with our Eco-system via our app and web-based solutions across different platforms for free. Adabase while built to work with Adashe can via smart contracts execute payments for other chains with associated fees, furthermore Project Adashe plans to eventually fork the Polygon chain for it custom blockchain protocol."
                : "Adashe is a seamless fusion of Tradefi, DeFi, and Data systems, It is the future of Money, It is available across multiple Blockchains. Developed by crypto pioneers, aerospace inventors, engineers, data scientist and tech leaders, Adashe establishes a standardized industry framework for trade, finance, data and for adoption of blockchain and crypto."}
            </p>
            <div>
              <button
                type="submit"
                className="text-platinateblue font-semibold font-montserrat text-[16px] leading-[35px] py-1 pr-[19px] w-[109px] h-[43px]"
                onClick={toggleButton}
              >
                {less ? "View Less" : "View More"}
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[50px] max-xl:mx-auto justify-center">
          {iconsData.map((items, index) => (
            <div className="flex gap-4 max-w-[361px] w-full" key={index}>
              <div>{items.icon}</div>
              <div>
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
    </div>
  );
};


export default Projectadashe;