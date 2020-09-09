import React, {useState, useEffect} from 'react';
import API from "../../utils/API";
import QRCode from '../QRCode'
import "./GridContainer.css";
import { useAuth } from "../../utils/auth";

function GridContainer() {
  const { user } = useAuth();
  const [qrcodes, setCodes] = useState("");

  useEffect(() => {
    API.getUser(user.id).then((res) => {
      setCodes (res.data.tables.map(table => (
        <QRCode 
          image = {table.QR_code}
          table = {table.table_num}
          key = {table._id}
        />
      )))
    });
  }, [user]);


  return(
    <div className="grid-container">
      {qrcodes}
    </div>
  )
}

export default GridContainer;