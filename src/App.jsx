import "./App.css";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import SearchComponent from "./components/SearchComponent/SearchComponent";
import SurveyComponent from "./components/SurveyComponent/SurveyComponent";
import HeroComponent from "./components/HeroComponent/HeroComponent";

const App = () => {
  return (
    <ChakraProvider>
      <div>
        <SurveyComponent />
        <HeroComponent />
        <SearchComponent />
      </div>
    </ChakraProvider>
  );
};

export default App;
