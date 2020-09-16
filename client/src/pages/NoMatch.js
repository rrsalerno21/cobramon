import React, { useState, useEffect } from "react";
// import API from "./../utils/API";
import Container from "../components/Container";
// import { Link } from "react-router-dom";
// import { useAuth } from "../utils/auth";

function NoMatch() {

  return (
    <div className="background-image">
      <h1 className="title-text">404</h1>
      <h1 className="title-text">Page not found</h1>
    </div>
  );
}

export default NoMatch;