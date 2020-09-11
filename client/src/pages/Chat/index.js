import Container from "../../components/Container";
import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import "./chat.css";
import { useAuth } from "../../utils/auth";

function ChatSidebar() {
  const { user } = useAuth();
  const [tables, setTables] = useState([]);
  const [selectedTableChat, setSelectedTableChat] = useState(null);

  useEffect(() => {
    API.getUser(user.id)
      .then((res) => {
        setTables(res.data.tables
          // .filter(table => table.isActive)
          .map(table => (
            <div className="sidebar-item" onClick={() => setSelectedTableChat(table.table_num)}>
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

export default ChatSidebar;