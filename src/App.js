import React, { useState } from "react";
import "./App.css";
import SearchComponent from "./Components/SearchComponent/SearchComponent";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
    setSearchResults(results);
  };
  // Make the search bar position fixed
  // Check scroll distance with framer motion
  // Z index of the hero section is above the search component
  // Fade out the whole hero section after a certain scroll distance

  return (
    <ChakraProvider>
      <div>
        <h1>Hyper Network</h1>
        <Search searchData={data} onSearch={handleSearch} />
        <div>
          {searchResults.map((result) => (
            <div key={result.id}>
              <p> Name: {result.firstName}</p>
              <p>Program:{result.program}</p>
              <p>Languages:{result.languages.join(", ")}</p>
              <p>Hard Skills:</p>
              <ul>
                {result.hardSkills.map((skill, index) => (
                  <li key={index}>
                    {skill.skill}: {skill.comment}
                  </li>
                ))}
              </ul>
              <p>Availbility:{result.availability}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ minHeight: "100vh" }}>
        <h1 style={{ fontSize: "96px" }}>Hyper Network</h1>
        <p>
          Welcome to Hyper Network! Our student database is designed to be your
          go-to resource for networking and skill-sharing. Whether you're on the
          lookout for a project partner, need assistance with a particular
          skill, or simply want to expand your network, you've come to the right
          place. Note: The database is continuously growing, so if you don't see
          a specific skill right away, keep checking back—it might just be a
          matter of time until the perfect collaborator joins the community.
        </p>
      </div>

      <SearchComponent />
    </ChakraProvider>
  );
}

export default App;
