import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";
import video from "./compressTennis.mp4";
export default function Hero() {
  return (
    <div className={"Hero"}>
      <div className={"cta_box"}>
        <h1>Dev Tennis</h1>
        <p>Keep it on the court</p>
        <Link to="/gear">Visit Store</Link>
        <Link to="/stats" className={"secondary-btn"}>
          Check Rankings
        </Link>
      </div>
      <div className={"overlay"}></div>
      <video className={"video"} autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
