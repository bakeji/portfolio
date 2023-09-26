import React from "react";

export default function Header(){
return(
   <header>
    <div className="logo">
        <h1>Fatimoh Bakare</h1>
    </div>

        <button className="ham"><img src="/menu.png" alt="" /></button>

    <nav>
        <a href="#app">Home</a>
        <a href="#About">About</a>
        <a href="#Projects">Project</a>
        <a href="#Contact">Contact</a>

    </nav>
   </header>
)
}