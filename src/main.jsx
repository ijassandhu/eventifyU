import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './assets/pages/login/Login.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

export default function Rpp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<App />} />
          {/* <Route path="login" element={<App />} /> */}
        </Route>
        <Route path="/login" element={<Login />}>
          <Route index element={<App />} />
          <Route path="login" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Rpp />);