import React from 'react';
import "../SidebarContainer/Sidebar.css";

function Sidebar(props) {

  return (
    <div className="sidebar-item">
      <p className="sidebar-title">Table {props.table}</p>
    </div>
  )
}

export default Sidebar;