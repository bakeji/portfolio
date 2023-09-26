import React, { useState } from "react";
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function App(){
  const [showNav, setShowNav] = useState(false)
  const toggleNav=()=>{
    setShowNav(prevNav => !prevNav)
  }
  return(
    <div id="app">
      <Header 
      toggleNav = {toggleNav} 
      showNav = {showNav}/>
      <About />
      <Projects />
      <Contact />
      <Footer />

    </div>
  )
}