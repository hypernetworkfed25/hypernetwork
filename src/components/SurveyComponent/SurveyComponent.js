import React from "react";
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
  MenuGroup,
  MenuOptionGroup,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";

import "./SurveyComponent.css";

const SurveyComponent = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <form className="form">
        {/* First row */}
        <div className="flex-container">
          <div className="flex-box">
            <FormControl className="form-control" isRequired>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="Enter your name" />
            </FormControl>
          </div>
          <div className="flex-box">
            <FormControl className="form-control" isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Enter your last name" />
            </FormControl>
          </div>
        </div>

        {/* Second row */}
        <div className="flex-container">
          <div className="flex-box">
            <FormControl className="form-control" isRequired>
              <FormLabel>School e-mail</FormLabel>
              <Input
                type="email"
                placeholder="Enter your Hyper Island e-mail"
              />
            </FormControl>
          </div>
          <div className="flex-box">
            <FormControl className="form-control" isRequired>
              <FormLabel>Confirm school e-mail</FormLabel>
              <Input
                type="email"
                placeholder="Enter your Hyper Island e-mail"
              />
              {/* FormErrorMessage for matching e-mails */}
              <FormErrorMessage>E-mails don't match</FormErrorMessage>
              {/* FormErrorMessage for invalid e-mail domain */}
              <FormErrorMessage>Invalid Hyper Island e-mail</FormErrorMessage>
            </FormControl>
          </div>
        </div>

        {/* Third row */}
        <div className="flex-container">
          <div className="flex-box">
            <FormControl className="form-control" isRequired>
              <FormLabel>Which program do you study?</FormLabel>
              <Select placeholder="Pick your program">
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
              <Menu closeOnSelect={false}>
                <MenuButton as={Button} rightIcon="">
                  Pick your languages
                </MenuButton>
                <MenuList>
                  <MenuOptionGroup defaultValue={["English"]} type="checkbox">
                    {[
                      "English",
                      "Swedish",
                      "Mandarin",
                      "Urdu",
                      "Basque",
                      "German",
                      "French",
                    ].map((language) => (
                      <MenuItemOption key={language} value={language}>
                        {language}
                      </MenuItemOption>
                    ))}
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </FormControl>
          </div>

          {/* Fourth Row */}
          <div className="block">
            <h2>Pick your main 3 skills</h2>

            {/* Skill #1 */}
            <div className="flex-container">
              <div className="skill-column">
                <FormControl>
                  <Select placeholder="Skill #1" isRequired>
                    {["CSS", "Javascript", "React", "Angular", "Photoshop"].map(
                      (skill) => (
                        <option key={skill} value={skill}>
                          {skill}
                        </option>
                      )
                    )}
                  </Select>
                </FormControl>
              </div>
              <div className="skill-column">
                <FormControl>
                  <Input
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
                    {["CSS", "Javascript", "React", "Angular", "Photoshop"].map(
                      (skill) => (
                        <option key={skill} value={skill}>
                          {skill}
                        </option>
                      )
                    )}
                  </Select>
                </FormControl>
              </div>
              <div className="skill-column">
                <FormControl isRequired>
                  <Input
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
                    {["CSS", "Javascript", "React", "Angular", "Photoshop"].map(
                      (skill) => (
                        <option key={skill} value={skill}>
                          {skill}
                        </option>
                      )
                    )}
                  </Select>
                </FormControl>
              </div>
              <div className="skill-column">
                <FormControl isRequired>
                  <Input
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
                <Select placeholder="Pick your answer">
                  {["Yes", "No", "Limited availability", "Only if paid"].map(
                    (program) => (
                      <option key={program} value={program}>
                        {program}
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
              <FormControl className="form-control" isRequired>
                <FormLabel>
                  Do you have a portfolio or any relevant link showcasing your
                  work?
                </FormLabel>
                <Input placeholder="Enter the link" />
              </FormControl>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SurveyComponent;
