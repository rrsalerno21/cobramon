import Container from "../../components/Container";
import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import "./tables.css";
import { useAuth } from "../../utils/auth";
import Chat from "../../components/Chat/Chat";

function Tables() {
  const { user } = useAuth();
  const [tables, setTables] = useState([]);
  const [selectedTableNum, setSelectedTableNum] = useState(null);

  useEffect(() => {
    API.getUser(user.id)
      .then((res) => {
        setTables(res.data.tables.map(table => (
          <div className="sidebar-item" onClick={() => setSelectedTableNum(table.table_num)}>
            <p className="sidebar-title">Table {table.table_num}</p>
          </div>
        )))
      });
  }, [user]);

  return (
    <div className="full-width">
      <div className="sidebar-container">
        {tables}
      </div>
      <Container>
        <h1> Tables PAGE </h1>
      </Container>
    </div>

  );
}


export default Tables;