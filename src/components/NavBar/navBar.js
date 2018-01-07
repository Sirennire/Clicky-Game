import React from "react";
import "./navBar.css";

const NavBar = (props) => {

    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li className="brand">
                        <a href="/">
                            Clicky Game
                        </a>
                    </li>
                    <li>{props.title}</li>
                    <li>
                        <span className="margin">
                            Score:
                        </span>
                        <span className="margin">  
                            {props.counter}
                        </span>
                        <span className="margin2">
                            | Top Score: 
                         </span>
                         <span className="margin">
                            {props.topScore}
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;