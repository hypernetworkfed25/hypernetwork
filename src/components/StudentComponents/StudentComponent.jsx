import React, { useState } from "react";
import "./StudentComponent.css";

const StudentComponent = ({ users }) => {
  const [expandedId, setExpandedId] = useState(null);

  const sortedUsers = users.sort((a, b) =>
    a.firstName.localeCompare(b.firstName)
  );

  const handleCardClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Function to determine and format contact information
  const formatContactInfo = (contact) => {
    if (contact.email) {
      return `Email: ${contact.email}`;
    } else if (contact.linkedin) {
      return `LinkedIn: ${contact.linkedin}`;
    } else if (contact.slack) {
      return `Slack: ${contact.slack}`;
    }
    return "No contact information provided";
  };

  return (
    <div className="student-container">
      {sortedUsers.map((user) => (
        <div
          key={user.id}
          className={`student-card ${expandedId === user.id ? "expanded" : ""}`}
          onClick={() => handleCardClick(user.id)}
        >
          <div className="student-name">
            {user.firstName} {user.lastName}
          </div>
          <div className="student-info">
            <div className="student-detail">
              PROGRAM: <b>{user.program}</b>
            </div>
            <div className="student-info-unexpanded">
              <div className="student-detail">
                PORTFOLIO: <b>{user.portfolio}</b>
              </div>
              <div className="project">
                Open for projects: <b>{user.availability}</b>
              </div>
            </div>
            {expandedId === user.id && (
              <div className="student-expanded-details">
                <div className="student-hard-skills">
                  HardSkills:
                  <div className="hardSkills">
                    {user.hardSkills.map((skill, index) => (
                      <div key={index} className="skills">
                        <div className="skill-line">
                          <b>{skill.skill}:</b>
                        </div>
                        <div className="comment">
                          <p>{skill.comment}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="student-languages">
                  Language: <b>{user.languages.join(", ")}</b>
                </div>
                {/* Adding the formatted contact information */}
                <div className="student-contact">
                  {formatContactInfo(user.contact)}
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
