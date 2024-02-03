import "./App.css";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import SearchComponent from "./components/SearchComponent/SearchComponent";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <SearchComponent />
      </ChakraProvider>
    </>
  );
};

export default App;
