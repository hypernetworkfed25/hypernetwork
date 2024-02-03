import React, { useState, useEffect } from "react";
import userData from "../../data/users.json";
import "./SearchComponent.css";
import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Switch,
} from "@chakra-ui/react";

import StudentComponent from "../StudentComponents/StudentComponent";
const users = userData.users;

const uniqueHardSkills = Array.from(
  new Set(
    users.flatMap((user) => user.hardSkills.map((hardSkill) => hardSkill.skill))
  )
);

const uniqueLanguages = Array.from(
  new Set(users.flatMap((user) => user.languages))
);

const SearchComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedProgram, setSelectedProgram] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [showOnlyWithPortfolio, setShowOnlyWithPortfolio] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    // Filter users based on the search criteria
    const filtered = users.filter((user) => {
      const searchTerms = searchText.toLowerCase().split(" ");

      const matchSearchText = searchTerms.every(
        (term) =>
          Object.values(user).some((value) =>
            value.toString().toLowerCase().includes(term)
          ) ||
          Object.values(user.contact).some((value) =>
            value.toString().toLowerCase().includes(term)
          ) ||
          user.hardSkills.some(
            (skill) =>
              skill.skill.toLowerCase().includes(term) ||
              skill.comment.toLowerCase().includes(term)
          )
      );

      const matchProgram =
        selectedProgram.length === 0 || selectedProgram.includes(user.program);

      const matchLanguages = selectedLanguages.length
        ? selectedLanguages.some((language) =>
            user.languages.some((userLanguage) => userLanguage === language)
          )
        : true;

      const matchSkills = selectedSkills.length
        ? selectedSkills.some((skill) =>
            user.hardSkills.some((userSkill) => userSkill.skill === skill)
          )
        : true;

      const matchPortfolio = showOnlyWithPortfolio ? user.portfolio : true;

      return (
        matchSearchText &&
        matchProgram &&
        matchLanguages &&
        matchSkills &&
        matchPortfolio
      );
    });

    setFilteredUsers(filtered);
  }, [
    searchText,
    selectedProgram,
    selectedLanguages,
    selectedSkills,
    showOnlyWithPortfolio,
  ]);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {/* Search  */}
      <div className="search-container">
        <div className="search-bar">
          {/* Search term input */}
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="search-field"
          />

          {/* Search filters */}
          <div className="filter-container">
            {/* Programs multiple select */}
            <Menu closeOnSelect={false} minWidth="240px">
              <MenuButton as={Button} colorScheme="gray" minWidth="128px">
                Programs
              </MenuButton>
              <MenuList minWidth="240px">
                <MenuOptionGroup type="checkbox">
                  {[...new Set(users.map((user) => user.program))].map(
                    (program, i) => (
                      <MenuItemOption
                        key={i}
                        value={program}
                        onClick={() => {
                          // Check if the program is already selected
                          const isProgramSelected =
                            selectedProgram.includes(program);

                          // If selected, remove it; otherwise, add it
                          setSelectedProgram((prevSelectedProgram) =>
                            isProgramSelected
                              ? prevSelectedProgram.filter(
                                  (selected) => selected !== program
                                )
                              : [...prevSelectedProgram, program]
                          );
                        }}
                      >
                        {program}
                      </MenuItemOption>
                    )
                  )}
                </MenuOptionGroup>
              </MenuList>
            </Menu>

            {/* Languages multiple select */}
            <Menu closeOnSelect={false} minWidth="240px">
              <MenuButton as={Button} colorScheme="gray" minWidth="128px">
                Languages
              </MenuButton>
              <MenuList minWidth="240px">
                <MenuOptionGroup type="checkbox">
                  {uniqueLanguages.map((language, i) => (
                    <MenuItemOption
                      key={i}
                      value={language}
                      onClick={() => {
                        // Check if the program is already selected
                        const isLanguageSelected =
                          selectedLanguages.includes(language);

                        // If selected, remove it; otherwise, add it
                        setSelectedLanguages((prevSelectedLanguage) =>
                          isLanguageSelected
                            ? prevSelectedLanguage.filter(
                                (selected) => selected !== language
                              )
                            : [...prevSelectedLanguage, language]
                        );
                      }}
                    >
                      {language}
                    </MenuItemOption>
                  ))}
                </MenuOptionGroup>
              </MenuList>
            </Menu>

            {/* Skills multiple select */}
            <Menu closeOnSelect={false} minWidth="240px">
              <MenuButton as={Button} colorScheme="gray" minWidth="128px">
                Skills
              </MenuButton>
              <MenuList minWidth="240px">
                <MenuOptionGroup type="checkbox">
                  {uniqueHardSkills.map((skill, i) => (
                    <MenuItemOption
                      key={i}
                      value={skill}
                      onClick={() => {
                        // Check if the program is already selected
                        const isSkillSelected = selectedSkills.includes(skill);

                        // If selected, remove it; otherwise, add it
                        setSelectedSkills((prevSelectedSkills) =>
                          isSkillSelected
                            ? prevSelectedSkills.filter(
                                (selected) => selected !== skill
                              )
                            : [...prevSelectedSkills, skill]
                        );
                      }}
                    >
                      {skill}
                    </MenuItemOption>
                  ))}
                </MenuOptionGroup>
              </MenuList>
            </Menu>

            {/* Checkbox for Portfolio */}
            <label>
              <Switch
                type="checkbox"
                checked={showOnlyWithPortfolio}
                onChange={() =>
                  setShowOnlyWithPortfolio(!showOnlyWithPortfolio)
                }
                size="md"
              />{" "}
              Show only users with Portfolio
            </label>
          </div>
        </div>
      </div>

      {/* Results of filtered users */}
      <StudentComponent users={filteredUsers} />
    </div>
  );
};

export default SearchComponent;
