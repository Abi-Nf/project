import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/404-not-found";
import Login from "./pages/login";
import "./assets/root.css";

const Synapso = () => {
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");

  sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
  });

  sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
  });
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