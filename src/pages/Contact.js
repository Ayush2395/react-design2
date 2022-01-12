<<<<<<< HEAD
import React from "react";
import FramePic from "../img/about-img.webp";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import axios from "axios";

function Contact() {
  function fadeEffect() {
    const socialMedia = document.querySelector(".socialMedia");
    socialMedia.classList.toggle("fade");
  }

  const sendMessage = () => {
    axios
      .post("http://localhost:3001/contact")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
=======
import React, { useState } from "react";
import FramePic from "../img/about-img.webp";
// import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";

function Contact() {
  const [follow, setFollow] = useState(false);
>>>>>>> master

  return (
    <div className="container contact-section">
      <div className="row">
        <div className="col">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter first name"
            />
          </div>
          <div className="mb-3">
            <label for="lastname" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Enter last name"
            />
          </div>
          <div className="mb-3">
            <label for="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Write your subject"
            />
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label for="message" className="form-label">
              Message
            </label>
            <textarea className="form-control" id="message" rows="3"></textarea>
          </div>
          <div className="mb-3">
<<<<<<< HEAD
            <button onClick={sendMessage} className="btn btn-secondary">
              Send message
            </button>
=======
            <button className="btn btn-secondary">Send message</button>
>>>>>>> master
          </div>
        </div>
        <div className="col">
          <div className="img-frame">
            <img src={FramePic} alt="Pic frame" />
          </div>
          <button
<<<<<<< HEAD
            onClick={fadeEffect}
            id="fadeBtn"
=======
            id="fadeBtn"
            onClick={() => {
              setFollow(!follow);
            }}
>>>>>>> master
            className="btn btn-outline-secondary follow"
          >
            Follow me
          </button>
<<<<<<< HEAD
          <div className="socialMedia" id="socialMedia">
            <div>
              <BsFacebook size={"30px"} />
            </div>
            <div>
              <BsInstagram size={"30px"} />
            </div>
            <div>
              <BsGithub size={"30px"} />
            </div>
          </div>
=======
          {follow ? (
            <div className="social-media" id="socialMedia">
              <div>
                <BsFacebook size={"30px"} />
              </div>
              <div>
                <BsInstagram size={"30px"} />
              </div>
              <div>
                <BsGithub size={"30px"} />
              </div>
            </div>
          ) : null}
>>>>>>> master
        </div>
      </div>
    </div>
  );
}

export default Contact;
