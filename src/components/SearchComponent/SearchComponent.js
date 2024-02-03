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
import { useDebounceValue } from "usehooks-ts";
import useFetch from "../../hooks/useFetch";

const users = userData.users;
const GET_STUDENTS_API =
  "https://hypernetworkserver.jinjingwu.workers.dev/api/hypernetwork";

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
  const [, setFilteredUsers] = useState([]);

  const [searchTerm, setSearchTerm] = useState({
    name: "",
    programs: [],
    languages: [],
    hardSkills: [],
  });

  const [debouncedSearchTerm] = useDebounceValue(searchTerm, 500);
  const {
    data: students,
    loading,
    error,
  } = useFetch(GET_STUDENTS_API, debouncedSearchTerm);

  const searchTermHandler = ({
    name = "",
    programs,
    languages,
    hardSkills,
    hasPortfolio,
  } = {}) => {
    setSearchTerm((prevSearchTerm) => ({
      ...prevSearchTerm,
      ...{ name },
      ...(programs && { programs }),
      ...(languages && { languages }),
      ...(hardSkills && { hardSkills }),
      ...{ hasPortfolio },
    }));
  };

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
            onChange={(e) => {
              const { value } = e.target;
              setSearchText(value);
              searchTermHandler({ name: value });
            }}
            className="search-field"
            // autoFocus
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

                          searchTermHandler({
                            programs: isProgramSelected
                              ? [...searchTerm.programs].filter(
                                  (selected) => selected !== program
                                )
                              : [...searchTerm.programs, program],
                          });
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

                        searchTermHandler({
                          languages: isLanguageSelected
                            ? [...searchTerm.languages].filter(
                                (selected) => selected !== language
                              )
                            : [...searchTerm.languages, language],
                        });
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
                        searchTermHandler({
                          hardSkills: isSkillSelected
                            ? [...searchTerm.hardSkills].filter(
                                (selected) => selected !== skill
                              )
                            : [...searchTerm.hardSkills, skill],
                        });
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
                onChange={() => {
                  const state = !showOnlyWithPortfolio;
                  setShowOnlyWithPortfolio(state);
                  searchTermHandler({ hasPortfolio: state });
                }}
                size="md"
              />{" "}
              Show only users with Portfolio
            </label>
          </div>
        </div>
      </div>

      {/* Results of filtered users */}
      {loading && <div>Loading...</div>}
      {error && <div>Some errors happing, please wait a while and retry.</div>}
      {!error &&
        !loading &&
        students?.map((user) => (
          <div key={user.id}>
            <div>
              {user.firstName} {user.lastName}
            </div>
            <div>
              {/* Display user categories */}
              {Object.entries(user)
                .filter(
                  ([key]) => key !== "hyperEmail" && key !== "confirmHyperEmail"
                )
                .map(([key, value]) => (
                  <div key={key}>
                    <span>{key}:</span> <pre>{JSON.stringify(value, 0, 2)}</pre>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default SearchComponent;
