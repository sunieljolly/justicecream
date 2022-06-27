import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@material-ui/core/Paper";
import "./App.css";

function convertHMS(value) {
  const sec = parseInt(value, 10); // convert value to number if it's string
  let hours = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
  let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
  // add 0 if value < 10; Example: 2 => 02
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return hours + ":" + minutes + ":" + seconds; // Return is HH : MM : SS
}

let firstCharacterOfRun = "";
function getMondayOfCurrentWeek() {
  const today = new Date();
  const first = today.getDate() - today.getDay() + 1;
  const monday = new Date(today.setDate(first));
  const mondayJustGone = monday.toString().slice(0, 10);
  return mondayJustGone;
}

if (getMondayOfCurrentWeek() == "Mon Jun 20") {
  firstCharacterOfRun = ".";
}
if (getMondayOfCurrentWeek() == "Mon Jun 27") {
  firstCharacterOfRun = ",";
}
if (getMondayOfCurrentWeek() == "Mon Jul 04") {
  firstCharacterOfRun = ";";
}
if (getMondayOfCurrentWeek() == "Mon Jul 11") {
  firstCharacterOfRun = "/";
}
if (getMondayOfCurrentWeek() == "Mon Jul 18") {
  firstCharacterOfRun = "'";
}
if (getMondayOfCurrentWeek() == "Mon Jul 25") {
  firstCharacterOfRun = "#";
}

const runs = [
 { 
    athlete: {
      firstname: 'Sunny',
      surname: 'J',
      profile: "https://www.strava.com/athletes/64202042",
    },
  distance: 0,
  moving_time: 0,
  total_elevation_gain: 0,
},
{ 
  athlete: {
    firstname: 'Geoff',
    surname: 'H',
    profile: "https://www.strava.com/athletes/64196508",
  },
distance: 0,
moving_time: 0,
total_elevation_gain: 0,
},
{ 
  athlete: {
    firstname: 'Robbie',
    surname: 'P',
    profile: "https://www.strava.com/athletes/14195994",
  },
distance: 0,
moving_time: 0,
total_elevation_gain: 0,
},
{ 
  athlete: {
    firstname: 'Matt',
    surname: 'L',
    profile: 'https://www.strava.com/athletes/57253367'
  },
distance: 0,
moving_time: 0,
total_elevation_gain: 0,
},
{ 
  athlete: {
    firstname: 'Matty',
    surname: 'G',
    profile: "https://www.strava.com/athletes/64233809",
  },
distance: 0,
moving_time: 0,
total_elevation_gain: 0,
},
{ 
  athlete: {
    firstname: 'Aman',
    surname: 'S',
    profile: "https://www.strava.com/athletes/37903350",
  },
distance: 0,
moving_time: 0,
total_elevation_gain: 0,
},
]
console.log(runs)

  export default function StravaData (){
  return (
    <div>
      <div className="challengeStats">
      <h3>Challenge</h3>
        <h3>Completed</h3>
        <h3>Remaining</h3><h3>Challenge</h3>
        <h3>Completed</h3>
        <h3>Remaining</h3>
      </div>
      <div className="elevation">Total Elevation: 0 m</div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Distance</TableCell>
              <TableCell align="center">Time</TableCell>
              <TableCell align="center">Elevation</TableCell>
              <TableCell align="center">Profile</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {runs.map((run) => (
              <TableRow key={run.id}>
                <TableCell align="center" scope="row">
                  {run.athlete.firstname} {run.athlete.lastname}
                </TableCell>
                <TableCell align="center">
                  {Math.round((run.distance / 1000) * 100) / 100} km
                </TableCell>
                <TableCell align="center">
                  {convertHMS(run.moving_time)}
                </TableCell>
                <TableCell align="center">{run.total_elevation_gain}</TableCell>
                <TableCell align="center">{run.athlete.profile}</TableCell>
                <TableCell align="center">✅</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};


