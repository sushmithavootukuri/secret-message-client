import React, { useState } from "react";
import * as yup from "yup";
import useForm from "react-hook-form";
import { api } from "./api/index";
import SentMessages from "./SentMessages"
import ViewSecretMessage from "./ViewSecretMessage"
import { v4 as uuidv4 } from 'uuid';

const MessageSchema = yup.object().shape({
  message: yup
    .string()
    .required("Secret Message is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required")

});

export default function Home({ id }) {

  return (
    <div>
      <h2 className="navbar-header site-name text-danger text-center pt-2 font-weight-bold">Secret Messanger</h2>
      {id && <ViewSecretMessage id={id} />}
      {!id && <HomePage />}

    </div>
  );
}

export function HomePage() {
  const [toggle, setToggle] = useState(false);
  const [toggleSentMessages, setToggleSentMessages] = useState(false);
  return (
    <div className="text-center">

      <button
        className="btn btn-danger  mx-5 my-5 p-2"
        onClick={() => {
          setToggle(!toggle);
          setToggleSentMessages(false)
        }}
      >
        Send a secret Message
      </button>

      <button
        className="btn btn-danger  mx-5 my-5 p-2"
        onClick={() => {
          setToggleSentMessages(!toggleSentMessages);
          setToggle(false);
        }}
      >
        View Sent Messages
      </button>

      {toggleSentMessages && <SentMessages />}
      {toggle && <MessageForm setToggle={setToggle} setToggleSentMessages={setToggleSentMessages} />}

    </div>
  );
}

export function MessageForm({ setToggle, setToggleSentMessages }) {

  const { register, handleSubmit, errors } = useForm({
    validationSchema: MessageSchema
  });

  const onSubmit = async (data) => {

    const messageData = {
      randomKey: uuidv4(),
      password: data.password,
      message: data.message,
      targetUrl: "http://localhost:3000",
      targetMail: data.email
    }

    api
      .post(`/create-message`, messageData)
      .then((res) => {
        alert("Message sent succesfully!");

        let msgStore = JSON.parse(localStorage.getItem("messages") || "[]");

        msgStore.push({
          randomKey: messageData.randomKey,
          message: messageData.message
        })
        localStorage.setItem("messages", JSON.stringify(msgStore));
        setToggle(false);
        setToggleSentMessages(true);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="col-md-4 mt-3 mx-auto">
          <div className="card h-100 ">
            <div className="card-body mx-auto">


              <input
                name="email"
                placeholder="Enter Receiver's Mail"
                type="email"
                ref={register}
                size="35"
              />
              {errors.email && <p className="error">{errors.email}</p>}


              <textarea name="message" placeholder="Secret Message" rows="4" ref={register} />
              {errors.message && <p className="error">{errors.message}</p>}

              <input
                name="password"
                placeholder="Enter Password"
                type="password"
                ref={register}
                size="35"
              />
              {errors.password && <p className="error">{errors.password}</p>}

              <input className="btn btn-danger" type="submit" />
            </div>
          </div>
        </div >
      </form>
    </div>
  );
}
