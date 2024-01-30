// Languages.js

import React, { useState, useEffect } from 'react';

const Languages = ({ onSelectLanguage }) => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch('https://www.localeplanet.com/api/auto/langmap.html');
        const data = await response.json();
        setLanguages(data);
      } catch (error) {
        console.error('Error fetching languages:', error);
      }
    };

    fetchLanguages();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <h2>Choose Languages:</h2>
      {languages.map(language => (
        <label key={language.code}>
          <input
            type="checkbox"
            value={language.name}
            onChange={() => onSelectLanguage(language.name)}
          />
          {language.name}
        </label>
      ))}
    </div>
  );
};

export default Languages;
