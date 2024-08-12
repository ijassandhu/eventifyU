import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";

import Body from "./components/body.jsx";
import Login from "./components/Login.jsx";
import Events from "./components/events.jsx";
import Clubs from "./components/clubs.jsx";
import Feedback from "./components/feedback.jsx";
import Dashboard from "./components/dashboard.jsx";
import NotFound from "./components/Notfound.jsx";
import ClubTemplate from "./components/clubs/clubtemplate.jsx";
import FAQ from "./components/faq.jsx";

// window.addEventListener("resize", () => {
//   if (window.innerHeight < window.outerHeight) {
//     // Keyboard is open
//     footer.style.position = "static"; // Hide footer
//   } else {
//     // Keyboard is closed
//     footer.style.bottom = "0"; // Show footer
//   }
// });

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<Events />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/clubs/:club_tag" element={<ClubTemplate />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
