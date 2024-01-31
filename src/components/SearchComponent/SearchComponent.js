import React, { useState, useEffect } from 'react';
import userData from '../../data/users.json';
import './SearchComponent.css';
import Select, { components } from 'react-select'; // Import components from react-select

const usersData = userData.users;

// Function to extract and join hard skills
const extractHardSkills = (hardSkills) => {
  if (Array.isArray(hardSkills)) {
    return hardSkills.map(skillObj => {
      if (typeof skillObj === 'object') {
        return skillObj.skill || '';
      } else if (typeof skillObj === 'string') {
        return skillObj;
      } else {
        return '';
      }
    }).join(', ');
  } else if (typeof hardSkills === 'object') {
    return hardSkills.skill || '';
  } else {
    return '';
  }
};



const SearchComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [showOnlyWithPortfolio, setShowOnlyWithPortfolio] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedHardSkills, setSelectedHardSkills] = useState([]);


  
  const handleHardSkillsChange = (selectedOptions) => {
    setSelectedHardSkills(selectedOptions);
  };

  const CustomMultiValueLabel = (props) => (
    <components.MultiValueLabel {...props}>
      {props.data.label}
    </components.MultiValueLabel>
  );


  useEffect(() => {
    // Filter users based on the search criteria
    const filtered = usersData.filter(user => {
      const matchSearchText = Object.values(user).some(value =>
        value.toString().toLowerCase().includes(searchText.toLowerCase())
      );

      const matchProgram = selectedProgram ? user.program === selectedProgram : true;

      const matchLanguages = selectedLanguages.length
        ? selectedLanguages.every(lang => user.languages.includes(lang))
        : true;

      const matchSkills = selectedSkills.length
        ? selectedSkills.every(skill =>
          user.hardSkills.some(userSkill => userSkill.skill === skill)
        )
        : true;

      const matchHardSkills = selectedHardSkills.length
        ? selectedHardSkills.every(skill =>
          user.hardSkills.some(userSkill => userSkill.skill === skill)
        )
        : true;

      const matchPortfolio = showOnlyWithPortfolio ? user.portfolio : true;

      return matchSearchText && matchProgram && matchLanguages && matchSkills && matchHardSkills && matchPortfolio;
    });

    setFilteredUsers(filtered);
  }, [searchText, selectedProgram, selectedLanguages, selectedSkills, selectedHardSkills, showOnlyWithPortfolio]);

  return (
    <>
      <div className="wrap">
        <div className="top-left">
          {/* Text field */}
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            className="input"
            autoFocus
          />
        </div>
        <div className="bottom-left"></div>
        <div className="container bottom-right">
          {/* TEST dropdown for hard skills */}
          <Select
        isMulti
        options={usersData.flatMap(user => user.hardSkills).map(skill => ({
          value: skill.skill,
          label: skill.skill
        }))}
        value={selectedHardSkills}
        onChange={handleHardSkillsChange}
        components={{
          MultiValueLabel: CustomMultiValueLabel,
        }}
        placeholder="Select hard skills"
        hideSelectedOptions={true}
        closeMenuOnSelect={false}
        styles={{
          multiValue: (styles) => ({
            ...styles,
            backgroundColor: '#D3D3D3', // Set the background color for selected options
          }),
          multiValueLabel: (styles) => ({
            ...styles,
            color: '#000000', // Set the text color for selected options
          }),
        }}
      />

          {/* Dropdown menus */}
          <select value={selectedProgram} onChange={e => setSelectedProgram(e.target.value)} className="no-border">
            <option value="">Select Program</option>
            {[...new Set(usersData.map(user => user.program))].map(program => (
              <option key={program} value={program}>
                {program}
              </option>
            ))}
          </select>

          <select
            multiple
            value={selectedLanguages}
            onChange={e => setSelectedLanguages(Array.from(e.target.selectedOptions, option => option.value))}
            className="no-border"
          >
            <option value="">Select Languages</option>
            {[...new Set(usersData.flatMap(user => user.languages))].map(language => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>

          <select
            multiple
            value={selectedSkills}
            onChange={e => setSelectedSkills(Array.from(e.target.selectedOptions, option => option.value))}
          >
            <option value="">Select Skills</option>
            {[...new Set(usersData.flatMap(user => user.hardSkills.map(skill => skill.skill)))].map(
              skill => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              )
            )}
          </select>

          {/* Checkbox for Portfolio */}
          <label>
            <input
              type="checkbox"
              checked={showOnlyWithPortfolio}
              onChange={() => setShowOnlyWithPortfolio(!showOnlyWithPortfolio)}
            />
            Show only users with Portfolio
          </label>
        </div>
      </div>
      {/* Display filtered users */}
      {filteredUsers.map(user => (
        <div key={user.id}>
          <div>{user.firstName} {user.lastName}</div>
          <div>
            {/* Display user categories */}
            {Object.entries(user)
              .filter(([key]) => key !== 'hyperEmail' && key !== 'confirmHyperEmail')
              .map(([key, value]) => (
                <div key={key}>
                  <span>{key}:</span> {Array.isArray(value) ? value.join(', ') : (typeof value === 'object' ? extractHardSkills(value) : String(value))}
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchComponent;
