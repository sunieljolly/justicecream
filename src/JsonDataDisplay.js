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
        <ul>
          {runs.map(run => (
            <li key={run.id}>
            name:{run.athlete.firstname}
            /distance:{run.distance/1000} 
            /time:{run.moving_time}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UsingFetch



   