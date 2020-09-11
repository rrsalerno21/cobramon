import React, { useState, useEffect } from "react";
// import API from "./../utils/API";
import Chat from "../components/Chat/Chat";
// import { Link } from "react-router-dom";
// import { useAuth } from "../utils/auth";

function CustomerChat(props) {

  return (
    <Chat 
    location = {props}
    />
  );
}

export default CustomerChat;