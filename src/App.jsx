import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Menu } from "./components/Menu";
import Productos from "./pages/Productos";
import { Outlet } from "react-router-dom";
function App() {

  return (
    <div className="flex flex-row h-screen">
      <Menu />
      <section className="m-auto">
        <Productos />
      </section>
    </div>
  );
}

export default App;
