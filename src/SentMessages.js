import React, { useState } from "react";
import { api } from "./api/index";

export default function ViewMessages() {
  const [messages, setMessages] = useState(JSON.parse(localStorage.getItem("messages")));

  return (

    <div className="col-md-8">
      <div className="row col-10 text-center text-danger  mx-auto">
        {!messages || messages.length === 0 ? <h1 >No secret messages sent!!</h1> :

          messages.length > 0 && messages.map((messageObj, index) => (
            <ViewMessage messageObj={messageObj} key={index} setMessages={setMessages} />
          ))
        }
      </div>
    </div >

  );
};

const ViewMessage = ({ messageObj, setMessages }) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [password, setPassword] = useState("");
  let deleteMessage = async (messageData) => {
    api.delete("/delete-message", { data: messageData })
      .then((res) => {
        alert("Message deleted succesfully!");


        let temp = JSON.parse(localStorage.getItem("messages") || "[]");
        temp = temp.filter((msg) => {
          return msg.randomKey !== messageData.secretKey
        })

        setMessages(temp)
        localStorage.setItem("messages", JSON.stringify(temp));
      })
      .catch((error) => alert(error));

  }
  return (

    <div className="col-md-5 mt-3 text-center">
      <div className="card h-100">
        <div className="card-body">
          <p className="card-text text-overflow ">{messageObj.message.length > 35 ? messageObj.message.substring(0, 35) + "..." : messageObj.message}  </p>
          {passwordVisibility && <input type="password" name="password" placeholder="Enter Password" onChange={(e) => {
            setPassword(e.target.value)
          }}></input>}
          {!passwordVisibility && <button className="btn btn-danger"
            onClick={() => {
              setPasswordVisibility(true)
            }}
          >Delete</button>}

          {passwordVisibility && <button className="btn btn-danger"
            onClick={() => {
              deleteMessage({
                password: password,
                secretKey: messageObj.randomKey
              }).then(() => {
                setPasswordVisibility(false)
                setPassword("")
              })

            }}
          >Delete</button>}

        </div>
      </div >
    </div >


  );
};

