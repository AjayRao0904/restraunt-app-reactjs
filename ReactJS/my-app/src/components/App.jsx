import React from "react";
import Header from "./Header";
import "./App.css"; 
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
function App() {
    return(
    <>
        <Header />
        <Outlet />
        <div className="footer-color"><Footer /></div>
    </>
    )
}

export default App;