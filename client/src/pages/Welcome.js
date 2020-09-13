import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import API from "./../utils/API";
import Container from "../components/Container";
// import { Link } from "react-router-dom";
// import { useAuth } from "../utils/auth";

function Welcome() {
  const { company_id, table_num } = useParams();
  return (
    <Container>
      <h1> Welcome PAGE </h1>
      <p>
        Company Id: {company_id} <br />
        Table Num: {table_num}
      </p>
      <Link>
        <button className={'button mt-20'} type="submit" to="/customerchat">Sign In</button>
      </Link>
    </Container>
  );
}

export default Welcome;
