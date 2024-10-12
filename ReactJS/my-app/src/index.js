import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import Home from "./components/Home.jsx";
import Menu from "./components/Menu.jsx";
import Contact from "./components/Contact.jsx";
import Feedback from "./components/Feedback.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="contact" element={<Contact />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
