import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import API from "./../utils/API";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";

function Welcome() {
  const { company_id, table_num } = useParams();
  // const [name, setName] = useState([]);


  // useEffect(() => {
  //   setName(0);
  //   for (let i = 0; i < name.length; i++) {
  //     setName(i);
  //   }
  // }, [company_id])



  return (
    <Container>
      <h1> Welcome PAGE </h1>
      <p>
        Company Id: {company_id} <br />
        Table Num: {table_num}
      </p>
      <Link onClick={e => (!table_num || !company_id) ? e.preventDefault() : null} to={`/customerchat?name=customer&room=${company_id}-${table_num}`}>
        <button className={'button mt-20'} type="submit"
        >Sign In</button>
      </Link>
    </Container>
  );
}

export default Welcome;
