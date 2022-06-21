import React, { useEffect, useState } from "react"

const UsingFetch = () => {
  const [runs, setRuns] = useState([])

  const fetchData = () => {
    fetch("https://www.strava.com/api/v3/clubs/Wivabix/activities?page=1&per_page=100",
        {
          headers: {
            Authorization: "Bearer b39e2cc169583c6cca4175454f2846ad8124efd1",
          },
          method: "GET",
        }
      )
      .then(response => {
        return response.json()
      })
      .then(data => {
        setRuns(data)
      })
  }
  console.log(runs)
  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    
    <div>
      {runs.length > 0 && (
        <table>
            <th>Runner</th>
            <th>Distance</th>
            <th>Time</th>
          {runs.map(run => (
            <tr key={run.id}>
            <td>{run.athlete.firstname}</td>
            <td>{(Math.round(run.distance*100)/100)/1000}</td>
            <td>{run.moving_time}</td>
            </tr>
          ))}
        </table>
      )}
    </div>
  )
}

export default UsingFetch



   