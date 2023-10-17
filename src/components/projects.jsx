import React from "react";

export default function Projects() {
  return (
    <section id="Projects">
      <h3 className="proj-text"> PROJECTS</h3>


      <div className="project">
            <div className="proj-pic">
            <img src="/musica.png" alt="" />
            </div>

            <div className="info">
            <span>
                <h3>MUSICA</h3>
             <div>
             <a
                href="https://musi-ca.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                >
                View
                </a>
             </div>
                <a
                href="https://github.com/bakeji/Musica"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img src="/github.png" alt="" />
                </a>
            </span>

            <p>
            Musica is a web application for playing and exploring music using the Deezer API. 
            This application allows you to browse curated playlists, top charts, new releases, and popular tracks.
             You can also view details about albums and play individual tracks. The project is built using React.
            </p>
            </div>
            </div>

        <div className="proj-rev">
            <div className="proj-pic">
            <img src="/ip.jpg" alt="" />
            </div>

            <div className="info">
            <span>
                <h3>IP Address Tracker</h3>
             <div>
             <a
                href="https://ip-addres-tracker.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                >
                View
                </a>
             </div>
                <a
                href="https://github.com/bakeji/Ip-address-tracker"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img src="/github.png" alt="" />
                </a>
            </span>

            <p>
                The IP Address Tracker app is a solution to the IP Address Tracker
                challenge provided by Frontend Mentor. It fetches geo-location and
                network information based on the user's input IP address or their
                current IP address
            </p>
            </div>
            </div>

            <div className="project">
            <div className="proj-pic">
                <img src="/questions.png" alt="" />
            </div>
            <div className="info">
                <span>
                <h3>Quizzical</h3>
               <div>
               <a
                    href="https://quzzicall.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View
                </a>
               </div>
                <a
                    href="https://github.com/bakeji/quzzical"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/github.png" alt="" />
                </a>
                </span>

                <p>
                This is a quiz application built with React. It fetches a set of
                quiz questions from an API, allows the user to select answers,
                checks the answers, and displays the score.
                </p>
            </div>
            </div>

            <div className="proj-rev">
            <div className="proj-pic">
                <img src="/rps.jpg" alt="" />
            </div>
            <div className="info">
                <span className="rps">
                <h3>Rock Paper And Scissors</h3>
               <div>
               <a
                    href=" https://rock-paper-nd-scissors.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View
                </a>
               </div>
                <a
                    href="https://github.com/bakeji/rock-paper-scissors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/github.png" alt="" />
                </a>
                </span>
            <p>
                This is a simple Rock Paper Scissors game created as a challenge
                from Frontend Mentor. The game is built using React, and it allows
                the player to play against the computer by choosing one of the three
                options: Rock, Paper, or Scissors.
            </p>
            </div>
        </div>

        <div className="project">
            <div className="proj-pic">
            <img src="/where.jpg" alt="" />
            </div>

            <div className="info">
            <span>
                <h3>Where in the world</h3>
               <div>
               <a
                href="https://where-in-the-wrld.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                >
                View
                </a>
               </div>
                <a
                href="https://github.com/bakeji/Where-in-the-world"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img src="/github.png" alt="" />
                </a>
            </span>

            <p>
                The Where In the World App is a web application that allows users to
                explore information about countries around the world. The app
                provides details such as population, region, capital, languages,
                currencies, and more for each country. Users can toggle between
                light and dark modes for their preferred visual experience.
            </p>
            </div>
      </div>

    </section>
  );
}
