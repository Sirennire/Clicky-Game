import React from "react";
import logo from './logo.svg';
import "./footer.css";

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="bottom">
                        Made By Erin Hagerty © 2018
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            
            </footer> 
        </div>
    );
};

export default Footer;