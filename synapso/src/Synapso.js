import {BrowserRouter,Routes,Route} from "react-router-dom";

export default function Synapso() {

  return (
  <BrowserRouter>
    <Routes>
      <Route element={Component} path="/something"/>
    </Routes>
  </BrowserRouter>
  );

}