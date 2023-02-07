import React, {useState, useEffect} from "react";
import './App.css';
import Home from "./Components/Home/home"
import NavBar from "./Components/header"
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import "./style.css";
import ResumeNew from "./Components/Resume/reumse"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() =>{
      updateLoad(false);
    },1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "resume" element = {<ResumeNew />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
