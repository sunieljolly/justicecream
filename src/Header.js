import React from "react";
import "./App.css";
import logo from "./logo.jpg";
import cover from "./cover.jpg";
import { Button } from "@mui/material";

export default function Header() {
  return (
    <>
      <img id="cover" src={cover} alt="cover"></img>
      <a
        id="logo"
        href="https://www.strava.com/clubs/709918/leaderboard"
        target="_blank"
      >
      <img id="logo" src={logo} alt="logo"></img>
      </a>
      <p className="groupname">Get fit or give up and drink!</p>
      <div className="title">
        
        <p>🇬🇧 United Kingdom Eastleigh, England, United Kingdom</p>
        <p>
          Just a group of mates giving each other shit due to how slow they all
          run ;)
        </p>
        </div>
    </>
  );
}
