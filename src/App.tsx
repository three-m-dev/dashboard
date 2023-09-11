import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Employee, Home, Improvement, Login, Structure } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/structure" element={<Structure />} />
        <Route path="/improvement" element={<Improvement />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
