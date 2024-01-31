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

        <p>
          Welcome to Hyper Network! Our student database is designed to be your
          go-to resource for networking and skill-sharing. Whether you're on the
          lookout for a project partner, need assistance with a particular
          skill, or simply want to expand your network, you've come to the right
          place. Note: The database is continuously growing, so if you don't see
          a specific skill right away, keep checking back—it might just be a
          matter of time until the perfect collaborator joins the community.
        </p>
        <p></p>
      </div>
      <SearchComponent />
    </div>
  );
}

export default App;
