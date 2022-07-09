import React from "react";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import Home from "./components/users/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/kuchbhi' element={<About />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
