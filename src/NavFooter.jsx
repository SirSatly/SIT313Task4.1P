import React, {useContext} from "react";
import Footer from "./Footer";
import {Outlet} from "react-router-dom"
import Navbar from "./Navbar";

function NavFooter ()
{
    return (
        <div className="App">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default NavFooter