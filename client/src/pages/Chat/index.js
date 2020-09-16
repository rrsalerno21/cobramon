import Container from "../../components/Container";
import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import "./chat.css";
import { useAuth } from "../../utils/auth";
import Chat from "../../components/Chat/Chat";
import { Link } from "react-router-dom";

function ChatSidebar() {
  const { user } = useAuth();
  const [tables, setTables] = useState([]);
  const [selectedTableNum, setSelectedTableNum] = useState(null);


  useEffect(() => {
    API.getUser(user.id)
      .then((res) => {
        setTables(res.data.tables
          // .filter(table => table.isActive)
          .map(table => (
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
        {selectedTableNum && <Chat name="server" room={selectedTableNum} />}
    </div>

  );
}

export default ChatSidebar;