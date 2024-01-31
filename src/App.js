import React,{useState} from 'react';
import './App.css';
import Search from './Components/Search';
import Languages from './Components/Languages';
import data from './users.json';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) =>{
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
        <p>Soft Skills:</p>
        <p>Availbility:{result.availability}</p>
        {result.portfolio && <p>Portfolio: {result.portfolio}</p>}

        {result.contact && (
          <div>
            <p>Email: {result.contact.email}</p>
            <p>LinkedIn: {result.contact.linkedin}</p>
            {/*result.contact.slack && (
              <p>Slack: {result.contact.slack.checked ? "Yes" : "No"}</p>
            )*/}
          </div>
        )}
      </div>
    ))}
  </div>
</div>
  );
            }
  export default App;
