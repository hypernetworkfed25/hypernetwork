import React, { useState } from 'react';
import './App.css';
import languagesData from './languagesData.json';
import Program from './Components/registrationForm/Program';
import programData from './program.json';
import SkillsData from './hardSkils.json';
import Skills from './Components/registrationForm/Skills';
import LanguagesForSurvey from './Components/registrationForm/LanguagesForSurvey';
import availabilityData from './availability.json';
import Availability from './Components/registrationForm/Availability';
  

function App() {
 
  const [selectedhardSkills, setSelectedhardSkills] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');
  const [selectedAvailability, setSelectedAvailability] = useState('');
  
  const handlehardSkillsChange = (selectedValue) => {
    setSelectedhardSkills(selectedValue);
  };
  
  const handleProgramSelect = (selectedValue) => {
    setSelectedProgram(selectedValue);
  };
  const handleLanguagesChange = (selectedValue) => {
    setSelectedLanguages(selectedValue);
  };
  const handleAvailabilitySelect = (selectedValue) => {
    setSelectedAvailability(selectedValue);
  };

  return (
    <div>
      <h1>Hyper Network</h1>
      <Program programs={programData} onSelectProgram={handleProgramSelect} />
      <Skills hardSkills={SkillsData} onSelecthardSkills={handlehardSkillsChange} />
      <LanguagesForSurvey onSelectLanguages={handleLanguagesChange} languages={languagesData} />
      <Availability onSelectAvailability={handleAvailabilitySelect} availabilities={availabilityData} />

     
      
            
      </div>
  
  );
}

export default App;
