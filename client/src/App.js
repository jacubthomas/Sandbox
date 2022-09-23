import React, { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const url = '/api'
  const [backendData, setBackendData] = useState ([{}])
  useEffect (() => {
    axios
    .get(url)
        .then((res) => {
          console.log(res.data);
          setBackendData (res.data)
        })
        .catch((err) => {
          console.log(err);
        });
  }, [/* empty array to ensure this only runs once, on initial render*/])


  return (
    <div>
      <h1>Best Car Deals</h1>
      <h2>Tesla</h2>
      {(typeof backendData.cars === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.cars.map ((car, i) => (
          <p key={i}>{car}</p>
        ))
      )}
    </div>
  )
}

export default App
