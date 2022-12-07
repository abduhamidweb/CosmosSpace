import { useState } from "react";
import reactLogo from "./assets/react.svg";
import context from "./context/context";
import "./App.css";
import Routee from "./Router/index";
import Footer from "./UI/Footer/Footer"
import req from "./API/API"
function App() {
  const [count, setCount] = useState(0);
  const [auth, setAuth] = useState(false);

  return (
    <>
      <context.Provider value={""}>
        <Routee />
      </context.Provider>
      <Footer/>
    </>
  );
}

export default App;
