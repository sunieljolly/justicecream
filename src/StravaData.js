import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@material-ui/core/Paper";



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

const UsingFetch = () => {
  // function createData(runner, distance, time) {
  //   return { runner, distance, time };
  // }
  const [runs, setRuns] = useState([]);

  const fetchData = () => {
    fetch(
      "http://localhost:8000/data",
      {
        method: "GET",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRuns(data);
        //let newArray = data.filter((element) => element.athlete.firstname === "Rob");
        //console.log(newArray);
        //setRuns(data);
      });
  };
  console.log(runs);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table" >
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Distance</TableCell>
              <TableCell align="center">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {runs.map((run) => (
              <TableRow key={run.id}>
                <TableCell align="center" component="th" scope="row">
                  {run.athlete.firstname} {run.athlete.lastname}
                </TableCell>
                <TableCell align="center">
                  {Math.round((run.distance / 1000) * 100) / 100} km
                </TableCell>
                <TableCell align="center">
                  {convertHMS(run.moving_time)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UsingFetch;
