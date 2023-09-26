import React, {useState, useEffect } from "react";

export default function Contact (){
    const [inputValue, setInputValue] = useState({
        name : "",
        email : "",
        message : ""
      })

      const handleChange = (event)=>{
        event.pre
        setInputValue(prevState=>{
            return{
            ...prevState,
            [event.target.name]:event.target.value
    }})
      }
      useEffect(()=>{}, [inputValue])

      
    return(
        <section id="Contact">
            <h3>CONTACT</h3>
            <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
            <form action="https://formspree.io/f/xvojwebg" method="POST">
                <div className="name">
                    <label htmlFor="name">Name</label>
                    <input 
                    name="name"
                    required
                    onChange={handleChange}
                    value={inputValue.name}
                    id="name" type="text"  placeholder="Enter your name"/>
                </div>

                <div className="email">
                    <label htmlFor="email">Email address</label>
                    <input
                    name="email"
                    onChange={handleChange}
                    value={inputValue.email}
                     id="email"
                     required
                      type="email" 
                       placeholder="Enter your email address"/>
                </div>

                <div className="message">
                    <label htmlFor="message">Message</label>
                    <input 
                    value={inputValue.message}
                    name="message"
                     id="message" 
                     onChange={handleChange}
                     type="text" 
                     required
                      placeholder="Enter your message"/>
                </div>
                <span >
                <button type="submit">Submit</button>
                </span>
            </form>

        </section>
    )
}