import React from 'react';
import "./QRCode.css";

function QRCode(props) {

  return (
    <div className="grid-item">
      <img src={props.image}></img>
      <p className="grid-title">Table {props.table}</p>
    </div>
  )
}

export default QRCode;