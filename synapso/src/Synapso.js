import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/404-not-found";
import Login from "./pages/login";
import "./assets/root.css";

const Synapso = () => {
  return (
    <Browser>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Browser>
  );
}

export default Synapso;