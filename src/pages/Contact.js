import React, { useState } from "react";
import FramePic from "../img/about-img.webp";
// import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";

function Contact() {
  const [follow, setFollow] = useState(false);

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
            <button className="btn btn-secondary">Send message</button>
          </div>
        </div>
        <div className="col">
          <div className="img-frame">
            <img src={FramePic} alt="Pic frame" />
          </div>
          <button
            id="fadeBtn"
            onClick={() => {
              setFollow(!follow);
            }}
            className="btn btn-outline-secondary follow"
          >
            Follow me
          </button>
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
        </div>
      </div>
    </div>
  );
}

export default Contact;
