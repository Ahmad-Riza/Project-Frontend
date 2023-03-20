import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component
// import MenuBar from "./components/global/MenuBar.js";
// import SideNav from "./components/global/SideNav.js";
// import Footer from "./components/global/Footer.js";

// Pages
import Home from "./Pages/Home";
// import IndexPackage from "./Pages/Package/IndexPackage.js";
// import IndexStore from "./Pages/Store/IndexStore";
// import IndexVehicle from "./Pages/Vehicle/IndexVehicle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        {/* <Route path="/package" element={<IndexPackage />} />
        <Route path="/store" element={<IndexStore />} />
        <Route path="/vehicle" element={<IndexVehicle />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
