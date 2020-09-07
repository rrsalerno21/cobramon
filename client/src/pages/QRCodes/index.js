import React from "react";
import Container from "../../components/Container";
// import { Link } from "react-router-dom";
import "./qrcodes.css";
import GridContainer from "../../components/GridContainer"


function QRCodes() {

  return (
    <Container>
      <h1> QR Codes </h1>
      <GridContainer />
    </Container>
  );
}

export default QRCodes;