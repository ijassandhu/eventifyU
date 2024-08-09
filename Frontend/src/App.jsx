import './App.css'
import './index.css'
import { Route , Routes } from 'react-router-dom'

import Body from './assets/components/body.jsx'
import Login from './assets/components/Login.jsx'
import Events from './assets/components/events.jsx'
import Clubs from './assets/components/clubs.jsx'
import Feedback from './assets/components/feedback.jsx'
import Dashboard from './assets/components/dashboard.jsx'
import NotFound from './assets/components/NotFound.jsx'
function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Body/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/clubs" element={<Clubs/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/feedback" element={<Feedback/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
      

    </>
  )
}

export default App
