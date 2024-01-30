import React, { useState } from "react";
import Search from "./Components/Search";
import data from "./users.json";
import SearchComponent from "./Components/SearchComponent/SearchComponent";
import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
    setSearchResults(results);
  };

  return (
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
      Search
      <input type="search" />
      <SearchComponent />
    </div>
  );
}

export default App;
