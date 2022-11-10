// import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage"
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { Work } from "./components/Work"
import { Contact } from "./components/Contact"
import { useState } from "react";
import React from 'react';


function App() {

  const [currentPage, setCurrentPage] = useState("")

  const displayPage = () => {
    switch (currentPage) {
      case "AboutMe":
        return <AboutMe />;
      case "Work":
        return <Work />;
      case "Contact":
        return <Contact />;
      default:
        return <LandingPage />;
    }
  }

  return (
    
      <div>
        <Nav setCurrentPage={setCurrentPage} />
        {displayPage()}
        <Footer />
      </div>
    

  );
}

export default App;
