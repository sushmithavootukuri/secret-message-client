import React, { useState } from "react";
import { api } from "./api/index";

export default function ViewMessages() {
  const [messages, setMessages] = useState(JSON.parse(localStorage.getItem("messages")));

  return (

    <div className="col-md-8">
      <div className="row col-10 ">
        {!messages ? <h1>No secret messages sent!!</h1> :

          messages.length > 0 && messages.map((messageObj, index) => (
            <ViewMessage messageObj={messageObj} key={index} setMessages={setMessages} />
          ))
        }
      </div>
    </div >

  );
};

const ViewMessage = ({ messageObj, setMessages }) => {

  let deleteMessage = (messageData) => {




    api.delete("/delete-message", { data: messageData })
      .then((res) => {
        alert("Message deleted succesfully!");

        let temp = JSON.parse(localStorage.getItem("messages"));
        temp = temp.filter((msg) => {
          return msg.randomKey !== messageData.secretKey
        })
        JSON.stringify(temp);
        setMessages(temp)
        localStorage.setItem("messages", temp)
      })
      .catch((error) => alert(error));

  }
  return (

    <div className="col-md-5 mt-3 text-center">
      <div className="card h-100">
        <div className="card-body">
          <p className="card-text text-overflow ">{messageObj.message.length > 35 ? messageObj.message.substring(0, 35) + "..." : messageObj.message}  </p>

          <button className="btn btn-danger"
            onClick={() => {

              let password = prompt("Enter password : ")
              deleteMessage({
                password: password,
                secretKey: messageObj.randomKey
              })
            }}
          >Delete</button>

        </div>
      </div>
    </div >


  );
};

