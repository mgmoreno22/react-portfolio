import React from "react";
import "./styles/Hero.css";

export default function Hero() {
  return (
    <header className="header">
      <img
        className="bgplanet"
        src="./images/AstroPlanet1.png"
        alt="background neon saturn outline"
      />
      <div className="container">
        <h1 className="header-text text-center">
          Hello, I am <span className="header-accent">Michael</span>.
        </h1>
      </div>
    </header>
  );
}
