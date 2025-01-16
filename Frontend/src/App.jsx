import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Body from "./components/body.jsx";
import Login from "./components/Login.jsx";
import Events from "./components/events.jsx";
import Clubs from "./components/clubs.jsx";
import Feedback from "./components/feedback.jsx";
import Dashboard from "./components/dashboard.jsx";
import NotFound from "./components/Notfound.jsx";
import Enroll from "./components/enroll.jsx";
import ClubTemplate from "./components/clubs/clubtemplate.jsx";
import Contact from "./components/contactus.jsx";
import FAQ from "./components/faq.jsx";

function App() {
  return (
    <>
      <AnimatePresence wait>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<Events />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/clubs/:club_tag" element={<ClubTemplate />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
