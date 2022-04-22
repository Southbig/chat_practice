import React from "react";
import style from "./chattingList.module.css";

const ChattingList = ({ data }) => {
  return (
    <div className={style.container}>
      <img src={data.Image} alt="" className={style.image} />
      <span className={style.room_name}>{data.Room}</span>
      <span className={style.data}>
        {data.createdAt.slice(0, 10)}, {data.createdAt.slice(12, 16)}
      </span>
      <button className={style.inBtn}>입장</button>
      <button className={style.deleteBtn}>삭제</button>
    </div>
  );
};

export default ChattingList;
