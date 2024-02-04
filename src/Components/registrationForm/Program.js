import React, { useState,} from 'react';
import programData from '../../program.json';



const Program = ({ programs, onSelectProgram }) => {
  const handleSelect = (selectedProgram) => {
    onSelectProgram(selectedProgram);
  };

  return (
    <div className="program-container">
      <label htmlFor="program">Select a program:</label>
      <select id="program" onChange={(e) => handleSelect(e.target.value)}>
        <option value="">Select...</option>
        {programs.map((program, index) => (
          <option key={index} value={program}>
            {program}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Program;
