import { useEffect, useState, useContext } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import SearchComponent from './components/Search'
import Nav from './components/Nav'
import Login from './components/Login'
import User from './components/User'
import UserContext from './UserContext'

function App() {


  const [userInfo, setUserInfo] = useState({
    username: '',
    password: ''
  })
  
  const [loggedIn, setLoggedIn] = useState(false)

  // login status:
  useEffect(() => {
    if (userInfo.username && userInfo.password) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [userInfo])


  return (
    <div className='app flex-col justify-between bg-platinum-200 w-full h-screen'>
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <h1 className='text-licorice text-4xl md:text-6xl font-bold md:font-semibold pt-8 pb-2'>Galaxy Gaze</h1>
      <h2 className='text-xl md:text-2xl font-semibold text-spacecadet-400'>An astronomy app</h2>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<SearchComponent />} />
            <Route path='/login' element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </main>
        </UserContext.Provider>
    </div>
  )
}

export default App
