import React from "react";
import style from "./chatPage.module.css";

const ChatPage = () => {
  return (
    <div className={style.container}>
      <div className={style.head}>
        <h1 className={style.text}>ChatCord</h1>
        <button className={style.exitBtn}>나가기</button>
      </div>
      <div className={style.tail}>
        <input type="text" className={style.send_input} />
        <button className={style.sendBtn}>send</button>
      </div>
    </div>
  );
};

export default ChatPage;
