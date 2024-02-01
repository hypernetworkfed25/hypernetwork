import React, { useState, useEffect } from "react";
import "./App.css";
import SearchComponent from "./components/SearchComponent/SearchComponent";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
// Make the search bar position fixed
// Check scroll distance with framer motion
// Z index of the hero section is above the search component
// Fade out the whole hero section after a certain scroll distance

return (
<ChakraProvider>
<div style={{ minHeight: "100vh" }}>
<h1 style={{ fontSize: "96px" }}>Hyper Network</h1>
<p>
Welcome to Hyper Network! Our student database is designed to be your
go-to resource for networking and skill-sharing. Whether you're on the
lookout for a project partner, need assistance with a particular
skill, or simply want to expand your network, you've come to the right
place. Note: The database is continuously growing, so if you don't see
a specific skill right away, keep checking back—it might just be a
matter of time until the perfect collaborator joins the community.
</p>
</div>

      <SearchComponent />
    </ChakraProvider>

);
}

export default App;

<!-- CSS code -->

.landing {
font-size: 10rem;
height: 100vh;
}
