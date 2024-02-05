import "./App.css";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SurveyComponent from "./components/SurveyComponent/SurveyComponent";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import SearchComponent from "./components/SearchComponent/SearchComponent";
import AboutUsComponent from "./components/AboutUsComponent/AboutUsComponent";

export const BASENAME =
  process.env.NODE_ENV === "production" ? "/hypernetwork" : "";

const App = () => {
  return (
    <ChakraProvider>
      <Router basename={BASENAME}>
        <div className="navbarContainer">
          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/survey">Sign-up</Link>
            </li>
            <li>
              <Link to="/AboutUs">About us</Link>
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
          <Route path="/AboutUs" element={<AboutUsComponent />} />
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
