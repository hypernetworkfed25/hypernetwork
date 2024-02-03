import React from "react";
import "./HeroComponent.css";

const HeroComponent = () => {
  return (
    <div className="hero-container">
      <h1>Hyper Network</h1>
      <div className="flex-container">
        <p>
          Welcome to Hyper Network!
          <br />
          Our student database is designed to be your go-to resource for
          networking and skill-sharing. Whether you're on the lookout for a
          project partner, need assistance with a particular skill, or simply
          want to expand your network, you've come to the right place.
          <br /> <br />
          Note: The database is continuously growing, so if you don't see a
          specific skill right away, keep checking back—it might just be a
          matter of time until the perfect collaborator joins the community.
        </p>
        <p>
          <span>HOW IT WORKS</span>
          <br />
          <br />
          Add Yourself: Share your skills, interests, and expertise by
          completing our quick survey. Your profile will be the gateway for
          others to discover and connect with you.
          <br />
          Discover Peers: Explore the database to find students with the skills
          you're looking for. Our intuitive search feature makes it easy to
          connect with like-minded peers.
          <br />
          Build Connections: Reach out to fellow students, collaborate on
          projects, or exchange knowledge.
        </p>
      </div>
      <span>Scroll</span>
    </div>
  );
};

export default HeroComponent;
