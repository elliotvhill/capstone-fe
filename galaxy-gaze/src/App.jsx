import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import SearchComponent from './components/Search'
import Nav from './components/Nav'

function App() {

  // state to store celestial bodies data
  // const [celestBodies, setCelestBodies] = useState([])
  
  // get location info (address) from user via input
  // state to store user location (address) data
  // const [userLocation, setUserLocation] = useState([])

  // store location info in variable to pass through to geocoding search base url
  // retrieve api response with geocoded location (lat/long)
  // store lat/long in new variable
  // pass location variable as query params in astro api call



  return (
    <div className='app'>
      <h1>Galaxy Gaze</h1>
      <h2>An astronomy app</h2>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<SearchComponent />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
