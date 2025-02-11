import "./App.css";
// import "../src/css/nav.css";
// import "../src/css/welcome.css";
// import "./css/test.css";

import { Route, Routes } from "react-router-dom";
import PortFolio from "./components/PortFolio/PortFolio";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PortFolio />} />
      </Routes>
    </div>
  );
}

export default App;
