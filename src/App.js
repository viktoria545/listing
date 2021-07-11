import './App.css';
import React from "react";

import Listing from "./components/Listing";

let jfile = require("./data/etsy.json");
let product = JSON.parse(JSON.stringify(jfile));

function App() {
  return (
    <div className="App">
      <Listing items={product} />
    </div>
  );
}

export default App;
