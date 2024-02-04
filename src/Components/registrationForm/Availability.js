import React, { useState } from 'react';

const Availability = ({ availabilities, onSelectAvailability }) => {
    const [selectedAvailability, setSelectedAvailability] = useState('');
  
    const handleAvailabilitySelect = (availability) => {
      setSelectedAvailability(availability);
      onSelectAvailability(availability);
    };
  
    return (
      <div className="availability-container">
        <label htmlFor="availability">Select availability:</label>
        <select
          id="availability"
          value={selectedAvailability}
          onChange={(e) => handleAvailabilitySelect(e.target.value)}
        >
          <option value="">Select...</option>
          {availabilities.map((availability, index) => (
            <option key={index} value={availability}>
              {availability}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default Availability;