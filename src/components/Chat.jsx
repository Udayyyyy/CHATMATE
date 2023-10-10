import React, { useContext } from "react";
// import Cam from "../img/cam.png";
// import Add from "../img/add.png";
// import More from "../img/more.png";

import { AuthContext } from "../context/AuthContext";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <div>
          <img
            className="chatuser"
            src={
              Chat.senderId === currentUser.uid
                ? currentUser.photoURL
                : data.user.photoURL
            }
            alt=""
          />
          <div className="username">{data.user?.displayName}</div>
        </div>
        {/* <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
  </div> */}
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
