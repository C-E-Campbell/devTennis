import React from "react";
import "./Footer.module.scss";
import style from "./Footer.module.scss";
export default function Footer() {
  return (
    <section className={style.Footer}>
      <div>Dev Tennis</div>
      <div className={style.iconBox}>
        <i className="fab fa-facebook"></i>
        <i className=" fab fa-instagram"></i>
        <i className="fab fa-pinterest"></i>
        <i className="fab fa-youtube"></i>
      </div>
      <div className={style.privacyBox}>
        <h6>Contact Us</h6>
        <h6>Terms of Use</h6>
        <h6>Privacy Policy</h6>
        <h6>Returns</h6>
        <h6>Careers</h6>
      </div>
    </section>
  );
}
