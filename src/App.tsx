import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CMM } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cmm" element={<CMM />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
