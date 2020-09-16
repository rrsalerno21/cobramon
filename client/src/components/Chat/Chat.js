// 'useEffect' allows you to perform side effects in function components
import React, { useState, useEffect } from "react";
// This module will be used for retrieving data from the URL
import io from "socket.io-client";
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import './Chat.css';

let socket;

const Chat = ({ name, room }) => {
  // const [name, setName] = useState('');
  // const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "https://cobramon.herokuapp.com/";  //"http://localhost:3001/";

  useEffect(() => {
    // const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    // setRoom(room);
    // setName(name)

    socket.emit('join', { name, room: String(room) }, (error) => {
      if (error) {
        alert(error);
      }
    });

    socket.on('message', message => {
      setMessages(messages => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    return function cleanup() {
      socket.disconnect('disconnect');
      setMessages([]);
    }
  }, [ENDPOINT, name, room]);

  // useEffect(() => {
  //     socket.on('message', message => {
  //       console.log(message);
  //         setMessages(messages => [...messages, message]);
  //     });

  //     socket.on("roomData", ({ users }) => {
  //         setUsers(users);
  //     });
  // }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    // <div className="outerContainer">
    <div className="container">

      <InfoBar room={room} />
      <Messages messages={messages} name={name} />
      <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
    </div>
    //     {/* <TextContainer users={users} />
    // </div> */}
  );
}

export default Chat;
