import React from "react";

export default function Contact (){
    return(
        <section id="Contact">
            <h3>CONTACT</h3>
            <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
            <form action="">
                <div className="name">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text"  placeholder="Enter your name"/>
                </div>

                <div className="email">
                    <label htmlFor="email">Email address</label>
                    <input id="email" type="email"  placeholder="Enter your email address"/>
                </div>

                <div className="message">
                    <label htmlFor="message">Message</label>
                    <input id="message" type="text"  placeholder="Enter your message"/>
                </div>
                <span >
                <button type="submit">Submit</button>
                </span>
            </form>

        </section>
    )
}