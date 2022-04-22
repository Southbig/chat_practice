import React from "react";
import style from "./randingPage.module.css";
import ChattingList from "./chattingList";

import { useState, useEffect } from "react";

import axios from "axios";

const RandingPage = () => {
  const [chatData, setChatData] = useState([]); // eslint-disable-line no-unused-vars

  console.log(chatData);

  const getChattingList = () => {
    axios.get("https://106.255.237.50:4000/contents").then((data) => {
      setChatData(data.data);
    });
  };

  useEffect(() => {
    getChattingList();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.head_text}>ChatCord</div>
      <div className={style.userInfo}>
        <div className={style.user_name}>
          <label htmlFor="user">User Name</label>
          <input
            type="text"
            placeholder="Enter username..."
            className={style.user_name_input}
          />
        </div>
        <div className={style.room_name}>
          <label htmlFor="room">Room Name</label>

          <select name="room" className={style.room_name_input}>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="PHP">PHP</option>
            <option value="C#">C#</option>
            <option value="Ruby">Ruby</option>
            <option value="Java">Java</option>
          </select>
        </div>
        <button className={style.joinBnt}>Join Chat</button>
      </div>
      <div className={style.chat_container}>
        <div className={style.head_text}>Chatting List</div>
        <div className={style.chattingList}>
          {chatData.map((data) => {
            return <ChattingList data={data} />;
          })}
        </div>
      </div>
      {/* <ChattingList /> */}
    </div>
  );
};

export default RandingPage;
