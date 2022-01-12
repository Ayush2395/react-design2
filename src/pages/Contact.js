import React, { useState } from "react";
import FramePic from "../img/about-img.webp";
import axios from "axios";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";

function Contact() {
  function fadeEffect() {
    const socialMedia = document.querySelector("#socialMedia");
    socialMedia.classList.toggle("fade");
  }

  const [inputValues, setInputValues] = useState({
    firstname: "",
    lastname: "",
    subject: "",
    email: "",
    message: "",
  });

  const sendMessage = (event) => {
    event.preventDefault();

    const dataWantToSend = {
      firstname: inputValues.firstname,
      lastname: inputValues.lastname,
      subject: inputValues.subject,
      email: inputValues.email,
      message: inputValues.message,
    };

    axios
      .post("http://localhost:3001/contact", dataWantToSend)
      .then((res) => console.log(res.data));

    setInputValues({
      firstname: "",
      lastname: "",
      subject: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container contact-section">
      <div className="row">
        <div className="col">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              First name
            </label>
            <input
              value={inputValues.firstname}
              onChange={(e) =>
                setInputValues({ ...inputValues, firstname: e.target.value })
              }
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
              value={inputValues.lastname}
              onChange={(e) =>
                setInputValues({ ...inputValues, lastname: e.target.value })
              }
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
              value={inputValues.subject}
              onChange={(e) =>
                setInputValues({ ...inputValues, subject: e.target.value })
              }
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
              value={inputValues.email}
              onChange={(e) =>
                setInputValues({ ...inputValues, email: e.target.value })
              }
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
            <textarea
              value={inputValues.message}
              onChange={(e) =>
                setInputValues({ ...inputValues, message: e.target.value })
              }
              className="form-control"
              id="message"
              rows="3"
            ></textarea>
          </div>
          <div className="mb-3">
            <button onClick={sendMessage} className="btn btn-secondary">
              Send message
            </button>
          </div>
        </div>
        <div className="col">
          <div className="img-frame">
            <img src={FramePic} alt="Pic frame" />
          </div>
          <button
            id="fadeBtn"
            onClick={fadeEffect}
            className="btn btn-outline-secondary follow"
          >
            Follow me
          </button>
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
        </div>
      </div>
    </div>
  );
}

export default Contact;
