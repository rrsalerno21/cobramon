import React from "react";

function Container({ style, ...props }) {
  const containerStyle = {
    maxWidth: "100%",
    margin: "0 auto",
    padding: "1rem",
  };
  return <div style={containerStyle} {...props} />;
}

export default Container;
