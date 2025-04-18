import React from "react";
import "./hero.css";
import heroImg from "../../Img/hero.png";
import heroBack from "../../Img/hero__back.png"
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">

        <div className="hero__center">
          <div className="hero-content">
            <h2>
              Vexon is a <span>backend developer</span> and <span>front-end developer</span>
            </h2>
            <p className="description">
              He crafts responsive websites where technologies<br></br> meet creativity
            </p>
            <button className="contact-btn">Contact me!!</button>
          </div>
          <div className="hero-image">
            <img className="hero__img" src={heroImg} alt="hero" />
            <img className="hero__back" src={heroBack} alt="" />
            <div className="status">
              <span className="status-dot"></span>
              Currently working on  Portfolio
            </div>
          </div>
        </div>

        <div className="hero__bottom">

        </div>
      </div>
    </section>
  );
};

export default Hero;
