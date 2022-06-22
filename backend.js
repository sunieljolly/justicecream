const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios").default;
require("dotenv").config();
const BASE_URL = "https://www.strava.com/api/v3/";
const AUTH_LINK = "https://www.strava.com/oauth/token";

//https://www.strava.com/oauth/authorize?client_id=63888&redirect_uri=http://localhost&response_type=code&scope=activity:read_all
//http://localhost/?state=&code=5be4d28fcec83fa907a06e15dd84566774aecff9&scope=read,activity:read_all

//state 5be4d28fcec83fa907a06e15dd84566774aecff9
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json("hi");
});

function reAuthorize() {
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
    .then((res) => {getData(res)})
    .catch((err) => {
      console.log(err);
    });
}
reAuthorize();
function getData(token) {
  console.log(token.data.expires_in)
  app.get("/data", (req, res) => {
    const options = {
      headers: {
        Authorization: "Bearer " + token.data.access_token,
      },
      method: "GET",
      url: BASE_URL + "clubs/Wivabix/activities?page=1&per_page=100",
    };

    axios.request(options).then((response) => {
      res.json(response.data);
    });
  });
}
app.listen(8000, () => console.log("Backend server running on port 8000"));
