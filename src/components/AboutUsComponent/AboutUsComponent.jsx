import React from "react";
import "./AboutUsComponent.css";
import { Link } from "react-router-dom";
import { Button, Tooltip, Box, Image } from "@chakra-ui/react";

function AboutUs() {
  const imageSrc =
    "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg"; // Replace with the URL of your image

  return (
    <>
      <div className="about">
        <h1>About us</h1>
        <p className="about-text">
          As{" "}
          <Tooltip
            label={
              <Image
                src={imageSrc}
                alt="Front End students"
                maxW="200px"
                maxH="100%"
              />
            }
            hasArrow
            placement="bottom"
          >
            <Box
              as="span"
              display="inline-block"
              cursor="pointer"
              className="box"
            >
              Hyper Island Front End students
            </Box>
          </Tooltip>
          , we thought it would be nice if someone from a design program could
          take care of our web's UI. But... we don't really have any good way to
          meet and collaborate with other students?
          <br />
          <br />
          That's when we came up with the Hyper Network. A way to bridge that
          gap and make it easy to find a Polish-speaking graphic designer, a
          developer to make your crazy portfolio come alive, or a Python guru to
          answer your questions.
          <br />
          <br />
          <span> &lt;cliché&gt;</span> Hopefully, we can make networking less
          awkward and help you find the right project partner.{" "}
          <span>&lt;/cliché&gt;</span>
          <br />
          <br />
          <div className="button-container">
            <Button colorScheme="green">
              <Link to="/survey">Sign-up now</Link>
            </Button>
          </div>
          <br />
          <br />
          <span>Where do you keep my data?</span>
          <br />
          The data is kept in an external server. If you're worried about your
          privacy, avoid adding any information that you don't wish to be
          public.
          <br />
          <br />
          <span>How can I edit/delete my data?</span>
          <br />
          Send an e-mail to jinjing.wu@hyperisland.se and we'll try to fix it as
          soon as possible.
          <br />
          <br />
          <span>
            Why do you ask for the Hyper Island e-mail if it's not displayed?
          </span>
          <br />
          This website is a student project. In the event that we decide to make
          changes, such as deleting the page or implementing any other
          modifications, we would like to inform you in advance.
          <br />
          <br />
          <span>I don't see the skill I'm looking for</span>
          <br />
          Send an e-mail to jinjing.wu@hyperisland.se and we'll try to fix it as
          soon as possible.
          <br />
          <br />
          <span>Do you have any suggestion or feedback?</span>
          <br />
          Please send an e-mail to jinjing.wu@hyperisland.se
          <br />
          <br />
          Thanks for visiting our page!
          <br />
          <br />
          <br />
          <br />
        </p>
      </div>
    </>
  );
}

export default AboutUs;
