import React from "react";
import style from "./About.module.scss";
export default function About() {
  return (
    <div className={style.About}>
      <div className={style.aboutText}>
        <div>
          <h4>All Brands. We carry the best in the game.</h4>

          <p>
            Wilson. Prince. Nike. We have it all. Sportswear and the best
            racquets on the market. Time to level up!
          </p>
          <button>View Gear</button>
        </div>
      </div>
    </div>
  );
}
