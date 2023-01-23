import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Story from "./Story";
import Roadmap from "./Roadmap";
import Utilities from "./Utilities";
import AboutUS from "./AboutUS";
import Home from "./Home";

function App() {
  const [isLoading, setLoading] = useState(true);
  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }
  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }
  return (
    <div className="App">
      <Header title="MyHeader" name="Global Header" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="story" element={<Story />} />
        <Route path="Roadmap" element={<Roadmap />} />
        <Route path="Utilities" element={<Utilities />} />
        <Route path="AboutUS" element={<AboutUS />} />
      </Routes>
      <footer className="footer">
        Copyright © 2021-2022 css.gg for icons under The MIT License (MIT) and
        BionicMinds NFT project for NFT image and other data.
      </footer>
    </div>
  );
}

export default App;
