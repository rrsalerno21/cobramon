import React, { useState, useEffect } from "react";
// import API from "./../utils/API";
import Container from "../../components/Container";
// import { Link } from "react-router-dom";
// import { useAuth } from "../utils/auth";
import "./qrcodes.css";

function QRCodes() {

  return (
    <Container>
      <h1> QR Codes </h1>

      <div className="grid-container">
        <div className="grid-item"> 
          <img src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"></img> 
          <p className="grid-title">Table 1</p>
        </div>
        <div className="grid-item"> 
          <img src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"></img> 
          <p className="grid-title">Table 2</p>
        </div>
        <div className="grid-item"> 
          <img src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"></img> 
          <p className="grid-title">Table 3</p>
        </div>
        <div className="grid-item"> 
          <img src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"></img> 
          <p className="grid-title">Table 4</p>
        </div>
        <div className="grid-item"> 
          <img src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"></img> 
          <p className="grid-title">Table 5</p>
        </div> 
        <div className="grid-item"> 
          <img src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"></img> 
          <p className="grid-title">Table 6</p>
        </div>
        <div className="grid-item"> 
          <img src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"></img> 
          <p className="grid-title">Table 7</p>
        </div>
        <div className="grid-item"> 
          <img src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"></img> 
          <p className="grid-title">Table 8</p>
        </div>
        <div className="grid-item"> 
          <img src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"></img> 
          <p className="grid-title">Table 9</p>
        </div>
      </div>
    </Container>
  );
}

export default QRCodes;