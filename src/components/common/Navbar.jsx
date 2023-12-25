import React, { useState } from "react";
import { Darkmodeicon, Lightmodeicon, Logoicon, Menuicon } from "./Icon";
import Logo from "../../assets/img/Logo.png";
import DarkLogo from "../../assets/img/Darklogo.png";
import Sidebar from "./Sidebar";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ dark, setDark }) => {
  const [side, setSide] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <div className={`bg-white sticky top-0 z-30 ${dark ? "darkmode" : ""}`}>
      <div
        className={`h-[98px] max-w-[1600px] mx-auto py-[13px] flex items-center justify-between `}
      >
        <div>
          {dark ? (
            <img className="w-[260px] h-[72px]" src={DarkLogo} alt="" />
          ) : (
            <img className="w-[260px] h-[72px]" src={Logo} alt="" />
          )}
        </div>
        <div className="flex items-center gap-[50px]">
          <div className="flex items-center gap-[52px] max-xl:hidden">
            <ul
              className={`flex items-center justify-center gap-[52px] text-[#373737] ${
                dark ? "darkmode" : ""
              }`}
            >
              <a href="">
                <li className=" hover:font-bold font-Montserrat text-[17px] font-medium">
                  ABOUT
                </li>
              </a>
              <a href="">
                <li className=" hover:font-bold font-Montserrat text-[17px] font-medium">
                  SERVICES
                </li>
              </a>
              <a href="">
                <li className=" hover:font-bold font-Montserrat text-[17px] font-medium">
                  ROADMAP
                </li>
              </a>
              <a href="">
                <li className=" hover:font-bold font-Montserrat text-[17px] font-medium">
                  TEAM
                </li>
              </a>
              <a href="">
                <li className=" hover:font-bold font-Montserrat text-[17px] font-medium">
                  FAQ’s
                </li>
              </a>
            </ul>
            {isAuthenticated && (
              <div>
                <h1 className="text-[18px] text-black font-bold font-Montserrat">
                  welcome to
                </h1>
                <h3 className="text-[18px] text-blue-600 font-medium font-Montserrat">
                  {user.name}
                </h3>
              </div>
            )}
            {isAuthenticated ? (
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                type="submit"
                className="rounded-[32px] hover:scale-105 text-[20px] w-[187px] h-[60px] bg-[linear-gradient(93deg,#423CE3_-1.15%,#8635ED_110.24%);] text-white font-Montserrat font-bold"
              >
                Log-out
              </button>
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                type="submit"
                className="rounded-[32px] hover:scale-105 text-[20px] w-[187px] h-[60px] bg-[linear-gradient(93deg,#423CE3_-1.15%,#8635ED_110.24%);] text-white font-Montserrat font-bold"
              >
                Log-in
              </button>
            )}
          </div>

          <span onClick={() => setDark(!dark)} className="cursor-pointer">
            {dark ? <Lightmodeicon /> : <Darkmodeicon />}
          </span>
          <div
            className="xl:hidden cursor-pointer"
            onClick={() => setSide(!side)}
          >
            <Menuicon />
          </div>
        </div>
      </div>
      <div
        className={`w-full  top-0 z-50 absolute h-screen ${
          side ? "left-0" : "left-[-105%]"
        }`}
      >
        <Sidebar setSide={setSide} />
      </div>
    </div>
  );
};

export default Navbar;
