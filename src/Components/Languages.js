// Languages.js


import React, { useState, useEffect } from 'react';
import languagesData from '../languagesData.json';


const Languages = () => {
    return (
      <div>
         <label htmlFor="language" className="style__language">Select a language:</label>
      <select id="language" className="dropdown__list">
        {languagesData.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>
      </div>
    );
  };


export default Languages;
