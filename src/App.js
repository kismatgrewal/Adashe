import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/common/Navbar";
import Buytoken from "./components/Buytoken";
import Core from "./components/Core";
import Exchanges from "./components/Exchanges";
import Projectadashe from "./components/Projectadashe";
import Smartcontract from "./components/Smartcontract";
import "./index.css";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className={`2xl:px-0 px-4 ${dark ? "darkmode" : ""}`}>
      <Navbar dark={dark} setDark={setDark} />
      <Hero dark={dark} setDark={setDark} />
      <Core />
      <Exchanges />
      <Projectadashe />
      <Smartcontract />
      {/* <Buytoken /> */}
    </div>
  );
}

export default App;
