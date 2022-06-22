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
const axios = require("axios");
const AUTH_LINK = "https://www.strava.com/oauth/token";
const firstCharacterOfRun = "."
  const challengeDistance = 151;
  let completedDistance = 0;
  let totalElevation = 0;

const UsingFetch = () => {

  // function createData(runner, distance, time) {
  //   return { runner, distance, time };
  // }
  const [runs, setRuns] = useState([]);
  
  const fetchData = () => {
    
    const options = {
      url: AUTH_LINK,
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      data: {
        client_id: "63888",
        client_secret: "5f71a72f4709fede33b57136cc54991ff076889a",
        refresh_token: "e065f6316423ed52e7e383f809fc3e0edc5fe3e9",
        grant_type: "refresh_token",
      },
    };
    axios
      .request(options)
      .then((res) => {
        let newToken = res.data.access_token;
        getData(newToken);
        console.log(convertHMS(res.data.expires_in))
      
      })
      .catch((err) => {
        console.log(err);
      });
    function getData(newToken) {
      fetch(
        "https://www.strava.com/api/v3/clubs/Wivabix/activities?page=1&per_page=100",
        {
          headers: {
            Authorization: "Bearer " + newToken,
          },
          method: "GET",
        }
      )
        .then((response) => {

          return response.json();
        })
        .then((data) => {
          console.log(data)
          let challengeRuns = data.filter(
            (run) => run.name.slice(0, 1) === firstCharacterOfRun
          );
          setRuns(challengeRuns);
            
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  runs.forEach((run) => {
    completedDistance += run.distance;
  });
  completedDistance = Math.round((completedDistance / 1000) * 100) / 100;
  
  runs.map((run) => {
   totalElevation += run.total_elevation_gain;
  });
  // const runners = [
  //   {
  //     name: "Sunny ☀",
  //     profile: "https://www.strava.com/athletes/64202042",
  //     km: [],
  //     time: [],
  //   },
  //   {
  //     name: "Matt Lloyd",
  //     profile: "https://www.strava.com/athletes/57253367",
  //     km: [],
  //     time: [],
  //   },
  //   {
  //     name: "MattG.",
  //     profile: "https://www.strava.com/athletes/64233809",
  //     km: [],
  //     time: [],
  //   },
  //   {
  //     name: "Geoff Hunt",
  //     profile: "https://www.strava.com/athletes/64196508",
  //     km: [],
  //     time: [],
  //   },
  //   {
  //     name: "Rob Pratt",
  //     profile: "https://www.strava.com/athletes/14195994",
  //     km: [],
  //     time: [],
  //   },
  //   {
  //     name: "Aman Sanghera",
  //     profile: "https://www.strava.com/athletes/37903350",
  //     km: [],
  //     time: [],
  //   }
  // ];

  
  return (    
    <div>      
      <div class="challengeStats">
        <h3>Challenge</h3>
        <h3>Completed</h3>
        <h3>Remaining</h3>
        <p>{challengeDistance} km</p>
        <p>{completedDistance} km</p>
        <p>{challengeDistance - completedDistance} km</p>
      </div>
      <div className="elevation">Total Elevation: {totalElevation} m</div>
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Distance</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Elevation</TableCell>
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
              <TableCell align="center">
                {(run.total_elevation_gain)}
              </TableCell>
              
              <TableCell align="center">✅</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      
    </div>

);
};

export default UsingFetch;
