// 'useEffect' allows you to perform side effects in function components
import React, { useState, useEffect } from "react";
// This module will be used for retrieving data from the URL
import io from "socket.io-client";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import "./Chat.css";
import { useAuth } from "../../utils/auth";
import API from "../../utils/API";

let socket;

const Chat = ({ name, room }) => {
  const { user } = useAuth;
  // const [name, setName] = useState('');
  // const [room, setRoom] = useState('');
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "http://localhost:3001/";
  const company_id = user ? user.id : String(room).split("-")[0];
  const table_id = String(room).split("-")[1];

  useEffect(() => {
    socket = io(ENDPOINT);

    API.getMessages(company_id, table_id)
      .then((response) => {
        console.log(company_id, table_id);
        const chatArray = response.data[0].chat;
        setMessages([...chatArray]);
      })
      .catch((err) => console.log("Error getting messages", err));

    socket.emit("join", { name, room: String(room) }, (error) => {
      if (error) {
        alert(error);
      }
    });

    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    return function cleanup() {
      socket.disconnect("disconnect");
      setMessages([]);
    };
  }, [ENDPOINT, name, room]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => {
        API.sendMessage(company_id, table_id, {
          text: message,
          user: name,
        })
          .then(() => setMessage(""))
          .catch((err) => console.log(err));
      });
    }
  };

  return (
    <div className="container">
      <InfoBar room={room} />
      <Messages messages={messages} name={name} />
      <Input
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
};

export default Chat;
