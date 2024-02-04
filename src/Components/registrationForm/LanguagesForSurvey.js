import React, { useState } from 'react';
import languagesData from '../../languagesData.json';
import Select from 'react-select';


const LanguagesForSurvey = ({ onSelectLanguages, languages }) => {
    const [selectedLanguages, setSelectedLanguages] = useState([]);

    const handleLanguagesChange = (selectedOptions) => {
        setSelectedLanguages(selectedOptions);
        onSelectLanguages(selectedOptions);
    };

    const languageOptions = languages.map((language) => ({
        label: language,
        value: language,
    }));

    const customStyles = {
        // Define your custom styles here if needed
    };

    return (
        <div className="languages-container">
            <label htmlFor="languages">Select languages you can speak:</label>
            <Select
                id="languages"
                isMulti
                options={languageOptions}
                value={selectedLanguages}
                onChange={handleLanguagesChange}
                styles={customStyles}
                isSearchable
                placeholder="Select languages..."
            />
        </div>
    );
};

export default LanguagesForSurvey;