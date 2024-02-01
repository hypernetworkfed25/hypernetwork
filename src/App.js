import React, { useState } from 'react';
import './App.css';
import Search from './Components/Search';
import Languages from './Components/Languages';
import userData from './users.json';
import languagesData from './languagesData.json';


function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleLanguageChange = (selectedValue) => {
    setSelectedLanguage(selectedValue);
  };

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <div>
      <h1>Hyper Network</h1>
      <Languages onSelectLanguage={handleLanguageChange} languages={languagesData} />
      <Search
        searchData={userData}
        onSearch={handleSearch}
        selectedLanguage={selectedLanguage}
      />
      <div>
        {searchResults.map((result) => (
          <div key={result.id}>
            <p> Name: {result.firstName}</p>
            <p>Program: {result.program}</p>
            <p>Languages: {result.languages.join(", ")}</p>
            <p>Hard Skills:</p>
            <ul>
              {result.hardSkills.map((skill, index) => (
                <li key={index}>
                  {skill.skill}: {skill.comment}
                </li>
              ))}
            </ul>
            <p>Availability: {result.availability}</p>
            {result.portfolio && <p>Portfolio: {result.portfolio}</p>}
            {result.contact && (
              <div>
                <p>Email: {result.contact.email}</p>
                <p>LinkedIn: {result.contact.linkedin}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
