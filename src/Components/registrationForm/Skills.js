import React, { useState } from 'react';
import SkillsData from '../../hardSkils.json';  
import Select from 'react-select';

const Skills = ({ onSelecthardSkills, hardSkills }) => {
    const [selectedSkills, setSelectedSkills] = useState([]);
  
    const handleSkillsChange = (selectedOptions) => {
        if(selectedOptions.length <= 3){
            setSelectedSkills(selectedOptions);
            onSelecthardSkills(selectedOptions);
        } else{
           console.log ("You Selected maximum number of skills ");
        }
        
    };
  
    const hardSkillsOptions = hardSkills.map((skill) => ({
        label: skill,
        value: skill,
      }));
    const customStyles = {
      // Define your custom styles here if needed
    };
  
    return (
      <div className="skills-container">
        <label htmlFor="skills">Select or type to search hard skills:</label>
        <Select
          id="skills"
          isMulti
          options={hardSkillsOptions} 
          value={selectedSkills}
          onChange={handleSkillsChange}
          styles={customStyles}
          isSearchable
          placeholder="Select or type..."
        />
      </div>
    );
  };
  
  export default Skills;

