import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";

// import "./tailwind.css";
import { Home } from "./Pages/Home";
import { Conservation } from "./Pages/Conservation";
import { Volunteer } from "./Pages/Volunteer";
import { NavBarModeDesktop } from "./components/NavBarModeDesktop/NavBarModeDesktop";
import { OurStory } from "./Pages/OurStory";
import { Fellowship } from "./Pages/Fellowship";
import { ErgVolunteering } from "./Pages/ErgVolunteering";
import { Donate } from "./Pages/Donate";
import { Contact } from "lucide-react";
import { ContactUs } from "./Pages/ContactUs";


export default function App() {
  return (
    <Router>
      <div>
        {/* Cleaned up className */}
        <NavBarModeDesktop className="z-50" />
        {/* <NavigationMenuDemo /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conservation" element={<Conservation />} />
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/ErgVolunteering" element={<ErgVolunteering />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Fellowship" element={<Fellowship />} />
        </Routes>
      </div>
    </Router>
  );
}