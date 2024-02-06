import React, { useState } from "react";
import languagesData from "../../data/languagesData.json";
import hardSkillsData from "../../data/hardSkillsData.json";

import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  Button,
} from "@chakra-ui/react";

import { useRef } from "react";

import "./SurveyComponent.css";

const SurveyComponent = () => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const emailConfirm = useRef();
  const program = useRef();
  const availability = useRef();
  const portfolio = useRef();
  const contactOption = useRef();
  const contactValue = useRef();

  const [isMatchingEmail, setIsMatchingEmail] = useState(true);
  const [isHyperIsland, setIsHyperIsland] = useState(true);

  const [selectedLanguages, setSelectedLanguages] = useState([]);

const handleLanguageChange = (selected) => {
  // Combine the current selected languages with the newly selected ones
  const newSelectedLanguages = [...selectedLanguages, ...selected];
  // Remove duplicates from the combined array
  const uniqueSelectedLanguages = Array.from(new Set(newSelectedLanguages));
  setSelectedLanguages(uniqueSelectedLanguages);
};

  function handleOnSubmit(e) {
    e.preventDefault();

    if (email.current.value === emailConfirm.current.value) {
      setIsMatchingEmail(true);
    } else {
      return setIsMatchingEmail(false);
    }

    if (
      email.current.value.includes("@hyperisland.se") &&
      emailConfirm.current.value.includes("@hyperisland.se")
    ) {
      setIsHyperIsland(true);
    } else {
      return setIsHyperIsland(false);
    }

    const testUser = {
      id: 1,
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      hyperEmail: email.current.value,
      confirmHyperEmail: emailConfirm.current.value,
      program: program.current.value,
      languages: selectedLanguages,
      hardSkills: [
        {
          skill: "Video editing",
          comment: "Ask me -almost- anything about Premiere",
        },
        {
          skill: "Javascript",
          comment: "I like designing portfolios",
        },
        {
          skill: "React",
          comment: "I can build basic things",
        },
      ],
      availability: availability.current.value,
      portfolio: portfolio.current.value,
      contact: contactValue.current.value,
    };

    console.log("SUCCESS! THE TEST USER IS", testUser);
  }

  return (
    <body>
      <form onSubmit={handleOnSubmit} className="form">
        {/* First row */}
        <div className="flex-container">
          <div className="flex-box">
            <FormControl className="form-control" isRequired>
              <FormLabel>First Name</FormLabel>
              <Input
                sx={{ width: "100%", minWidth: "300px" }}
                ref={firstName}
                placeholder="Enter your name"
              />
            </FormControl>
          </div>
          <div className="flex-box">
            <FormControl className="form-control" isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input
                sx={{ width: "100%", minWidth: "300px" }}
                ref={lastName}
                placeholder="Enter your last name"
              />
            </FormControl>
          </div>
        </div>

        {/* Second row */}
        <div className="flex-container">
          <div className="flex-box">
            <FormControl className="form-control" isRequired>
              <FormLabel>School e-mail</FormLabel>
              <Input
                sx={{ width: "100%", minWidth: "300px" }}
                ref={email}
                type="email"
                placeholder="Enter your Hyper Island e-mail"
              />
            </FormControl>
          </div>
          <div className="flex-box">
            <FormControl
              className="form-control"
              isRequired
              isInvalid={!isMatchingEmail || !isHyperIsland}
            >
              <FormLabel>Confirm school e-mail</FormLabel>
              <Input
                sx={{ width: "100%", minWidth: "300px" }}
                ref={emailConfirm}
                type="email"
                placeholder="Enter your Hyper Island e-mail"
              />
              {/* FormErrorMessage for matching e-mails */}
              {!isMatchingEmail && (
                <FormErrorMessage>E-mails don't match</FormErrorMessage>
              )}
              {/* FormErrorMessage for invalid e-mail domain */}
              {!isHyperIsland && (
                <FormErrorMessage>Invalid Hyper Island e-mail</FormErrorMessage>
              )}
            </FormControl>
          </div>
        </div>

        {/* Third row */}
        <div className="flex-container">
          <div className="flex-box">
            <FormControl className="form-control" isRequired>
              <FormLabel>Which program do you study?</FormLabel>
              <Select ref={program} placeholder="Pick your program">
                {[
                  "AI Business Consultant",
                  "Content Developer",
                  "Data Analyst",
                  "Design Lead",
                  "Digital Creative",
                  "Frontend Developer",
                  "Motion Creative",
                  "UX Designer",
                  "XR Creative Developer",
                ].map((program) => (
                  <option key={program} value={program}>
                    {program}
                  </option>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="flex-box">
            <FormControl className="form-control" isRequired>
              <FormLabel>Which languages do you speak?</FormLabel>
              <Menu closeOnSelect={false} onChange={handleLanguageChange}>
                <MenuButton as={Button} rightIcon="">
                  Pick your languages
                </MenuButton>
                <MenuList>
                  <MenuOptionGroup defaultValue={["English"]} type="checkbox">
                    {languagesData.map((language) => (
                      <MenuItemOption key={language} value={language}>
                        {language}
                      </MenuItemOption>
                    ))}
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </FormControl>
          </div>
        </div>

        {/* Fourth Row */}
        <div className="block">
          <h2>Pick your main 3 skills</h2>

          {/* Skill #1 */}
          <div className="flex-container">
            <div className="skill-column">
              <FormControl>
                <Select placeholder="Skill #1" isRequired>
                  {hardSkillsData.map((skill) => (
                    <option key={skill} value={skill}>
                      {skill}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="skill-column">
              <FormControl>
                <Input
                  sx={{ width: "100%", minWidth: "500px" }}
                  maxLength={50}
                  placeholder="You can write a comment about this skill"
                  onChange={(e) => {
                    const charactersLeft = 50 - e.target.value.length;
                    console.log(`Characters left: ${charactersLeft}`);
                  }}
                />
              </FormControl>
            </div>
          </div>

          {/* Skill #2 */}
          <div className="flex-container">
            <div className="skill-column">
              <FormControl isRequired>
                <Select placeholder="Skill #2">
                  {hardSkillsData.map((skill) => (
                    <option key={skill} value={skill}>
                      {skill}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="skill-column">
              <FormControl isRequired>
                <Input
                  sx={{ width: "100%", minWidth: "500px" }}
                  maxLength={50}
                  placeholder=" You can write a comment about this skill"
                  onChange={(e) => {
                    const charactersLeft = 50 - e.target.value.length;
                    console.log(`Characters left: ${charactersLeft}`);
                  }}
                  minWidth="200px"
                />
              </FormControl>
            </div>
          </div>

          {/* Skill #3 */}
          <div className="flex-container">
            <div className="skill-column">
              <FormControl isRequired>
                <Select placeholder="Skill #3">
                  {hardSkillsData.map((skill) => (
                    <option key={skill} value={skill}>
                      {skill}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="skill-column">
              <FormControl isRequired>
                <Input
                  sx={{ width: "100%", minWidth: "500px" }}
                  maxLength={50}
                  placeholder="You can write a comment about this skill"
                  onChange={(e) => {
                    const charactersLeft = 50 - e.target.value.length;
                    console.log(`Characters left: ${charactersLeft}`);
                  }}
                />
              </FormControl>
            </div>
          </div>
        </div>

        {/* Fifth row */}
        <div className="flex-container">
          <div className="flex-box">
            <FormControl className="form-control" isRequired>
              <FormLabel>
                Are you available to collaborate with other students?
              </FormLabel>
              <Select ref={availability} placeholder="Pick your answer">
                {["Yes", "No", "Limited availability", "Only if paid"].map(
                  (availability) => (
                    <option key={availability} value={availability}>
                      {availability}
                    </option>
                  )
                )}
              </Select>
            </FormControl>
          </div>
        </div>
        {/* Sixth row */}
        <div className="flex-container">
          <div className="flex-box">
            <FormControl className="form-control">
              <FormLabel>
                Do you have a portfolio or any relevant link showcasing your
                work?
              </FormLabel>
              <Input ref={portfolio} placeholder="Enter the link" />
            </FormControl>
          </div>
        </div>

        {/* Seventh row */}
        <div className="block">
          <h2>What's your preferred way of contact?</h2>

          {/* Way of contact */}
          <div className="flex-container">
            <div className="skill-column">
              <FormControl>
                <Select
                  placeholder="Choose one"
                  isRequired
                  onChange={(e) => {
                    switch (e.target.value) {
                      case "E-mail":
                        contactValue.current.placeholder = "E-mail address";
                        contactValue.current.value = email.current.value;
                        contactValue.current.disabled = true;
                        break;

                      case "LinkedIn":
                        contactValue.current.placeholder =
                          "Enter your LinkedIn profile url";
                        contactValue.current.value = "";
                        contactValue.current.disabled = false;
                        break;

                      case "Slack":
                        contactValue.current.placeholder = "Slack username";
                        contactValue.current.value = "";
                        contactValue.current.disabled = false;
                        break;

                      default:
                        contactValue.current.placeholder = "Write something";
                        contactValue.current.value = "";
                        contactValue.current.disabled = true;
                    }
                  }}
                  ref={contactOption}
                >
                  {["E-mail", "LinkedIn", "Slack"].map((contact) => (
                    <option key={contact} value={contact}>
                      {contact}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="skill-column">
              <FormControl>
                <Input
                  maxLength={50}
                  placeholder=""
                  onChange={(e) => {
                    const charactersLeft = 50 - e.target.value.length;
                    console.log(`Characters left: ${charactersLeft}`);
                  }}
                  ref={contactValue}
                  disabled
                />
              </FormControl>
            </div>
          </div>
        </div>

        {/* Seventh row */}
        <Button colorScheme="green" type="submit">
          Submit
        </Button>
      </form>
    </body>
  );
};

export default SurveyComponent;
