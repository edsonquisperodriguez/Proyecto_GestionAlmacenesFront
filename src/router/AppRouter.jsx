import { Routes, Route } from "react-router-dom";
import App from "../App";
import { Login } from "../pages/Login";
import Productos from "../pages/Productos";
import Home from "../pages/Home";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="productos" element={<Productos />} />
  </Routes>
);

export default AppRouter;
