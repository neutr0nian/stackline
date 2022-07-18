import React from "react";
import logo from "../stackline_logo.svg";

function Navbar() {
    return (
        <div className="bg-navbar p-3">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
}

export default Navbar;
