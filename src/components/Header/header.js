import React from "react";
import "./header.css";

const Header = () => {
    return (
        <div>
            <header className="header">
                <h1>
                    Clicky Game! 
                </h1>
                <h2>
                    Click on an image to earn points, but don't click on any more than once!
                </h2>
            </header> 
        </div>
    );
};

export default Header;