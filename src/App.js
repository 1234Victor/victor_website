import React, {useState, useEffect} from "react";
import './App.css';
import Home from "./Components/Home/home"
import NavBar from "./Components/header"
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import "./style.css";
import ResumeNew from "./Components/Resume/reumse"
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./Components/Project/Projects";
import Footer from "./Components/footer";
import About from "./Components/About/About"
import Blog from "./Components/Blog/blog"

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
          <Route exact path = "/" element = {<Home />} />
          <Route exact path = "projects" element = {<Projects />} />
          <Route exact path = "resume" element = {<ResumeNew />} />
          <Route exact path = "about" element = {<About />} />
          <Route exact path = "blog" element = {<Blog />} />
          <Route exact path = "" element = {<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
