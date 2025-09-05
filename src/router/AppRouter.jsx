import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Auth from "../features/auth/Auth";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Auth />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
);

export default AppRouter;
