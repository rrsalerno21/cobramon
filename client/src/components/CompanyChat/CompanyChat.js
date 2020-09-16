// 'useEffect' allows you to perform side effects in function components
import React, { useState, useEffect } from "react";
// This module will be used for retrieving data from the URL
import queryString from "query-string";
import io from "socket.io-client";

import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";

import "./CompanyChat.css";
import { useAuth } from "../../utils/auth";
import API from "../../utils/API";

let socket;

const CompanyChat = ({ location }) => {
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "http://localhost:3000/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    API.getMessages(user.id, room)
      .then((response) => {
        const chatArray = response.data[0].chat;
        setMessages([...messages, ...chatArray]);
      })
      .catch((err) => console.log("Error getting messages", err));

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => {
        API.sendMessage(user.id, room, {
          text: message,
          user: name,
        })
          .then(() => setMessage(""))
          .catch((err) => console.log(err));
      });
    }
  };

  return (
    // <div className="outerContainer">
    <div className="container">
      <InfoBar room={room} />
      <Messages messages={messages} name={name} />
      <Input
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
    //     {/* <TextContainer users={users} />
    // </div> */}
  );
};

export default CompanyChat;
