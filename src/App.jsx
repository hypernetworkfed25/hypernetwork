import "./App.css";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import StudentComponent from "./components/StudentComponents/StudentComponent";
import SearchComponent from "./components/SearchComponent/SearchComponent";
import SurveyComponent from "./components/SurveyComponent/SurveyComponent";
import HeroComponent from "./components/HeroComponent/HeroComponent";

const App = () => {
  return (
    <ChakraProvider>
      <div>
      <HeroComponent />
      <SearchComponent />
      <SurveyComponent />
      <StudentComponent />
      </div>
    </ChakraProvider>
  );
};

export default App;
