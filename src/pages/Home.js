import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Quotes from "../components/Quotes";
// import ProfilePic from "../img/profile-img.png";
import ProfilePic from "../img/profile-img.webp";

function Home() {
  return (
    <div className="container mt-5 home-section">
      <Quotes
        left="<-- Forget about the World,"
        right="Just listen to yourself =>"
      />
      <div className="row">
        <div className="col">
          <div className="img-box mx-auto">
            <img src={ProfilePic} alt="ProfilePic" />
          </div>

          <div className="dots-grp-1">
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
          </div>
          <div className="dots-grp-2">
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
          </div>
          <div className="dots-grp-3">
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
          </div>
        </div>
        <div className="col">
          <div className="content-home mt-5">
            <span>Hi, It's me</span>
            <h1>Ayush</h1>
            <div className="triangle">
              <div className="arrow-right"></div>
            </div>
            <h3>
              I'm{" "}
              <span>
                <Typewriter
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                  words={[
                    "Web Developer",
                    "Photographer",
                    "Web designer",
                    "UI Designer",
                  ]}
                />
              </span>
            </h3>
            <p>
              Hi, I'm still a Student and studying on a React base web
              application.
            </p>
            <div className="btn-grp">
              <Link to="/project" className="btn btn-secondary">
                My Work
              </Link>
              <Link to="/contact" className="btn btn-outline-secondary">
                Hire me
              </Link>
            </div>
            <div className="star">
              <div className="rect-1"></div>
              <div className="rect-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
