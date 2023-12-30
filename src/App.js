import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/common/Navbar";
import Buytoken from "./components/Buytoken";
import Core from "./components/Core";
import Exchanges from "./components/Exchanges";
import Projectadashe from "./components/Projectadashe";
import Smartcontract from "./components/Smartcontract";
import "./index.css";
import Todolist from "./components/common/Todolist";
import { ToastContainer } from "react-toastify";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <>
      <Todolist />
      {/* <div className={`2xl:px-0 px-4 ${dark ? "darkmode" : ""}`}>
        <Navbar dark={dark} setDark={setDark} />
        <Hero dark={dark} setDark={setDark} />
        <Core />
        <Exchanges />
        <Projectadashe />
        <Smartcontract />
      </div> */}
    </>
  );
}

export default App;
