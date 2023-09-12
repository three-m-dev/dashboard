import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  Employee,
  Improvement,
  Login,
  Structure,
} from "./pages/portal";
import {
  About,
  Careers,
  Contact,
  Home,
  NotFound,
  Services,
} from "./pages/business";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Business */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />

        {/* Portal */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/structure" element={<Structure />} />
        <Route path="/improvement" element={<Improvement />} />

        {/* Misc */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
