import React from "react";
import style from "./ScrollOver.module.scss";
export default function ScrollOver() {
  return (
    <div className={style.scrollOver}>
      <h2 data-aos="fade-up" data-aos-once="true" className={style.heading}>
        IT'S GAME TIME
      </h2>
    </div>
  );
}
