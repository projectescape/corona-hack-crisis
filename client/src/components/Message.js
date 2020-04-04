import React, { useContext } from "react";
import Context from "../context";

const Message = () => {
  const { message } = useContext(Context);

  return (
    <div id="content" className="p-4 p-md-5 pt-5">
      <h4 className="mb-4" style={{ color: "#6E7AFA", textAlign: "center" }}>
        Message
      </h4>
      <p style={{ fontWeight: "bold", color: "black" }}>{message}</p>
    </div>
  );
};

export default Message;
