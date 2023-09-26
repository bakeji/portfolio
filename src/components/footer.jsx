import React from "react";

export default function Footer(){
    return(
        <footer>
            <div className="footer">
                <div className="extra-info">
                    <h1> Fatimoh Bakare</h1>
                    <p></p>
                </div>

                <div className="social">
                    <p>You can reach me on:</p>
                    <span>
                    <a href="https://github.com/bakeji"><img src="/github.png" alt="" /></a>
                    <a href="mailto:fatimohbakare3@gmail.com"><img src="/envelop.png" alt="" /></a>
                    <a href="https://twitter.com/keji___"> <img src="/twitter.png" alt="" /></a>
                    </span>
                </div>
            </div>
            <hr />
            <small>© Copyright 2023. Made by <a href="">Fatimoh Bakare</a></small>
        </footer>
    )
}