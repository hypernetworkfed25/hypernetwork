import "./App.css";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SurveyComponent from "./components/SurveyComponent/SurveyComponent";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import SearchComponent from "./components/SearchComponent/SearchComponent";

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <div className="navbarContainer">
          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/survey">Sign-up</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<HeroComponent />} />
          <Route
            path="/survey"
            element={
              <>
                <SurveyComponent />
              </>
            }
          />
          {/* Add other routes if needed */}
        </Routes>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchComponent />
              </>
            }
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
