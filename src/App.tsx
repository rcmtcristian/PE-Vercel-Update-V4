import { BrowserRouter as Router, Route, Routes, useParams } from "react-router";
import "./styles.css";

import { Home } from "./Pages/Home";
import { Conservation } from "./Pages/Conservation";
import { Volunteer } from "./Pages/Volunteer";
import { NavBarModeDesktop } from "./components/NavBarModeDesktop/NavBarModeDesktop";
import { OurStory } from "./Pages/OurStory";
import { Fellowship } from "./Pages/Fellowship";
import { ErgVolunteering } from "./Pages/ErgVolunteering";
import { Donate } from "./Pages/Donate";
import { ContactUs } from "./Pages/ContactUs";

// Define the structure of dynamic routes
const pages: { [key: string]: JSX.Element } = {
  conservation: <Conservation />,
  Ourstory: <OurStory />,
  volunteer: <Volunteer />,
  ErgVolunteering: <ErgVolunteering />,
  donate: <Donate />,
  fellowship: <Fellowship />,
  ContactUs: <ContactUs />,
};


const DynamicPage = () => {
  const { page } = useParams<{ page?: string }>();

  if (!page || !(page in pages)) {
    return <h1>404 - Page Not Found</h1>;
  }

  return pages[page];
};

export default function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <NavBarModeDesktop className="z-50" />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Dynamic route */}
          <Route path="/:page" element={<DynamicPage />} />
        </Routes>
      </div>
    </Router>
  );
}
