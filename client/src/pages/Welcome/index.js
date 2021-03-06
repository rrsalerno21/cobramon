import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./welcome.css";
// import API from "./../utils/API";
// import { Link } from "react-router-dom";
// import { useAuth } from "../utils/auth";

function Welcome() {
  const { company_id, table_num } = useParams();
  return (
    <div className="background-image">
      <h1 className="title-text"> Welcome to COMPANY NAME </h1>
      {/* TODO: CORRECT LINK */}
      {/* onClick={e => (!company_id || !table_num) ? e.preventDefault() : null} to={`/customerchat/name={ADDNAME}&room=${company_id}${table_num}` */}
      <Link className="service-link" to='/customerchat'>
        <button> 
          Request Service
        </button>
      </Link>
    </div>
  );
}

export default Welcome;
