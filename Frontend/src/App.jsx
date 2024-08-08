import Navbar from './assets/components/navbar'
import Login from './assets/components/Login.jsx'
import './App.css'
import './index.css'
import { Route , Routes } from 'react-router-dom'

import Body from './assets/components/body.jsx'
import Events from './assets/components/events.jsx'
import Clubs from './assets/components/clubs.jsx'
import Feedback from './assets/components/feedback.jsx'
import Dashboard from './assets/components/dashboard.jsx'
{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" /> */}
function App() {

  return (
    <>
     <Navbar/> 
     <Routes>
      <Route path="/" element={<Body/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/clubs" element={<Clubs/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/feedback" element={<Feedback/>}/>
    </Routes>

    </>
  )
}

export default App
