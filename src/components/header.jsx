import React from "react";

export default function Header(props){
return(
   <header>
    <div className="logo">
        <h1>Fatimoh Bakare</h1>
    </div>

        <button onClick={props.toggleNav} className="ham"><img src={props.showNav? "/cross.png": "/hamburger.png"} alt="" /></button>

    <nav className={props.showNav? "show" : "hide"}>
        <a href="#app">Home</a>
        <a href="#About">About</a>
        <a href="#Projects">Project</a>
        <a href="#Contact">Contact</a>

    </nav>
   </header>
)
}