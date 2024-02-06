import React from "react";
import "./HeroComponent.css";
import downChevron from "./down-chevron.png"; // Import the image

const HeroComponent = () => {
  return (
    <div className="hero-container">
      <h1>Hyper Network</h1>
      <div className="flexing-container">
        <div>
          <p>
            <span>Welcome to Hyper Network!</span>
            <br />
            <br />
            Our student database is designed to be your go-to resource for
            networking and skill-sharing. Whether you're on the lookout for a
            project partner, need assistance with a particular skill, or simply
            want to expand your network, you've come to the right place. <br />
            <span>Note:</span> The database is continuously growing, so if you
            don't see a specific skill right away, keep checking back—it might
            just be a matter of time until the perfect collaborator joins the
            community!
          </p>
        </div>

        <div>
          <p>
            <span>HOW IT WORKS</span>
            <br />
            <br />
            <span>Add Yourself:</span> Share your skills, interests, and
            expertise by completing our quick survey. Your profile will be the
            gateway for others to discover and connect with you. <br />{" "}
            <span>Discover Peers:</span>
            Explore the database to find students with the skills you're looking
            for. Our intuitive search feature makes it easy to connect with
            like-minded peers. <br /> <span>Build Connections:</span> Reach out
            to fellow students, collaborate on projects, or exchange knowledge.
          </p>
        </div>
      </div>
      <div className="arrow">
        <a href="#search-bar" className="scroll-down-btn">
          Search <img src={downChevron} alt="arrow" />
        </a>
      </div>
    </div>
  );
};

export default HeroComponent;
