import React, { useRef } from "react";
import classes from "./contactus.module.css";
import { Button } from "@mui/material";

// import Botton from "../../UI/Button/Button";

const ContactUs = (props) => {
  const nameref = useRef(null);
  const emailref = useRef(null);
  const messageref = useRef(null);
  const onFormHandler = (event) => {
    event.preventDefault();
    const obj = {
      name: nameref.current.value,
      email: emailref.current.value,
      message: messageref.current.value,
    };
    // fetch("https://movies-671f6-default-rtdb.firebaseio.com/contactus.json", {
    //   method: "POST",
    //   body: JSON.stringify(obj),
    //   header: {
    //     "context-type": "application/json",
    //   },
    // });
    // console.log(obj);
    // console.log("contact us page Handler");
  };
  return (
    <div className={classes.container4}>
      <div className={classes.container5}>
        <h1>Get In Touch</h1>
        <p>we are here for you! How can we help?</p>

        <form className={classes.formss} onSubmit={onFormHandler}>
          <input
            ref={nameref}
            id="name"
            type="text"
            placeholder="Enter your name"
          ></input>
          <input
            id="email"
            ref={emailref}
            type="text"
            placeholder="Enter your email address "
          ></input>
          <textarea
            id="message"
            ref={messageref}
            type="text"
            placeholder="Go ahead, we are listeneing  "
          ></textarea>

          <button type="submit" name="Submit" className={classes.contactbtn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
