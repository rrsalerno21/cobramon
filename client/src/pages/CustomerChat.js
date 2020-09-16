import React, { useState, useEffect } from "react";
// import API from "./../utils/API";
import Chat from "../components/Chat/Chat";
import queryString from "query-string";
// import { Link } from "react-router-dom";
// import { useAuth } from "../utils/auth";

function CustomerChat({ location }) {
  const [room, setRoom] = useState("");
  useEffect(() => {
    const { room } = queryString.parse(location.search);
    setRoom(room);
  }, []);

  return <Chat name="customer" room={room} />;
}

export default CustomerChat;
