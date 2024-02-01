import React, { useState } from "react";
import "./StudentComponent.css";
import usersData from "./data/Users.json"; // Make sure this path is correct

const StudentComponent = () => {
  const [expandedId, setExpandedId] = useState(null);
  const users = usersData.users; // Assuming your JSON structure has a 'users' array

  const handleCardClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="student-container">
      {users.map((user) => (
        <div
          key={user.id}
          className={`student-card ${expandedId === user.id ? "expanded" : ""}`}
          onClick={() => handleCardClick(user.id)}
        >
          <div className="student-name" onClick={() => setExpandedId(user.id)}>
            {" "}
            <h2>
              {user.firstName} {user.lastName}
            </h2>
          </div>
          <div className="student-info">
            <div className="student-detail">
              <b>Program: </b>
              {user.program}
            </div>
            <div className="student-info-unexpanded">
              <div className="student-detail">
                {" "}
                <b>Portfolio: </b>
                {user.portfolio}
              </div>
              <div>
                <b>Open for projects:</b> {user.availability}
              </div>
            </div>
            {expandedId === user.id && (
              <div className="student-expanded-details">
                <div className="student-hard-skills">
                  <b>HardSkills:</b>
                  {user.hardSkills.map((skill, index) => (
                    <div key={index}>
                      {skill.skill}: {skill.comment}
                    </div>
                  ))}
                </div>
                <div className="student-languages">
                  <b>Language:</b> {user.languages.join(", ")}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentComponent;
