import React from "react";
import "./App.css";
import logo from "./logo.jpg";
export default function Header() {
  return (
    <div className="header">
      <div>
        <h1>Get fit or give up and drink!</h1>
        <p>
          Just a group of mates giving each other shit due to how slow they all
          run ;)
        </p>
      </div>
      <a id="logo" href="https://www.strava.com/clubs/709918/leaderboard" target="_blank">
        <img src={logo} alt="logo"></img>
      </a>
    </div>
  );
}
