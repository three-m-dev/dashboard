import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CMM, Home } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cmm" element={<CMM />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
