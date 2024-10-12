import React, { useState } from "react";
import "./Contact.css";
function Contact() {
  const [userResgistration, setUserRegistration] = useState({
    username: "",
    email: "",
    message: "",
  });

  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userResgistration, [name]: value });
  }
  function response() {
    alert("Sorry for the inconvenience. We will look into the matter");
  }
  return (
    <>
      <form method="POST" action="/submit">
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={userResgistration.username}
            onChange={handleInput}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={userResgistration.email}
            onChange={handleInput}
          />
        </div>

        <div>
          <label>Message</label>
          <input
            type="text"
            name="message"
            id="message"
            value={userResgistration.message}
            onChange={handleInput}
          />
        </div>

        <button type="submit" onClick={response}>
          Submit
        </button>
      </form>

      <div></div>
    </>
  );
}

export default Contact;
