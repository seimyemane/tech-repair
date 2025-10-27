import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HowItWorks from "./components/HowItWorks";
import HomePageWeb from "./Divisions/WebServices/HomePageWeb";
import StartWebProject from "./Divisions/WebServices/components/StartWebProject";
// Repairly
import RepHomePage from "./Divisions/Repairly/RepHomePage";
// IT & Networking
import IT_Hompage from "./Divisions/IT/IT_Hompage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="how-it-works" element={<HowItWorks />} />
      {/* divisions */}
      {/* WEB SERVICES */}
      <Route path="/division/web" element={<HomePageWeb />} />
      <Route path="/division/web/start" element={<StartWebProject />} />
      {/* REPAIRLY */}
      <Route path="/division/repairS" element={<RepHomePage />} />
      {/* IT & Networking */}
      <Route path="/division/it" element={<IT_Hompage />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
