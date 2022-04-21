import react from 'react-dom';
import React, {useState,useEffect} from 'react';
import './App.css';
import Header from  './Header';
import logo from "./logo.png";
import { Routes, Route } from "react-router-dom"
import Story from "./Story"
import Roadmap from './Roadmap';
import Utilities from './Utilities';
import AboutUS from './AboutUS';
import Home from './Home';
import Thankyou from './Thankyou';


function App() {
  const [isLoading, setLoading] = useState(true);
  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }
  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
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

 <Header title="MyHeader" name ="Global Header"/>
 <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="story" element={ <Story/> } />
        <Route path="Roadmap" element={ <Roadmap/> } />
        <Route path="Utilities" element={ <Utilities/> } />
        <Route path="AboutUS" element={ <AboutUS/> } />
        <Route path="/thankyou" element={ <Thankyou/> } />
        
      </Routes>
 
    </div>
  );
}

export default App;
