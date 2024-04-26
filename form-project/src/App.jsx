/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import RegistrationForm from "./components/RegistrationForm";
import "./App.css";

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/registration-form" element={<RegistrationForm />} />
          </Routes>
        </div>
      </>
    </Router>
  );
};

export default App;