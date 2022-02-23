import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return (
    <div id="home">
      <h1 style={{ color: "salmon" }}>
        {name} is a Software engineer and <br></br>Blockchain Enthusiast <br></br> <br></br>from {city}
      </h1>
    </div>
  );
}

export default Home;
