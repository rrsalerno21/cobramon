import React, { useState, useEffect } from "react";
// import API from "./../utils/API";
import Container from "../../components/Container";
// import { Link } from "react-router-dom";
// import { useAuth } from "../utils/auth";
import "./chat.css";

function Chat() {

  return (
    // TODO: CREATE FULL WIDTH COMPONENT
    <div className="full-width">
      {/* TODO: CREATE SIDEBAR COMPONENT */}
      <div className="sidebar">
        {/* TODO: FOR EACH TABLE CREATE TABLE COMPONENT */}
        <a className="active" href="#news">Table #1</a>
        <a href="#contact">Table #2</a>
        <a href="#about">Table #3</a>
        <a href="#news">Table #4</a>
      </div>
      <Container>
        <h1> CHAT PAGE </h1>
        {/* TODO: CHAT COMPONENT GOES HERE */}
      </Container>
    </div>
  );
}

export default Chat;