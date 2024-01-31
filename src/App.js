import React,{ useState, useEffect } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent/SearchComponent';


function App() {
  return (
    <div>
      <div>
      <h1>Hyper Network</h1>
      <p>Welcome to Hyper Network!
          Our student database is designed to be your go-to resource for networking and skill-sharing.
          Whether you're on the lookout for a project partner, need assistance with a particular skill, or simply want to expand your network, you've come to the right place.
          Note: The database is continuously growing, so if you don't see a specific skill right away, keep checking back—it might just be a matter of time until the perfect collaborator joins the community.
      </p>
      <p></p>
      </div>
     <SearchComponent />
    </div>
  );
}

export default App;
