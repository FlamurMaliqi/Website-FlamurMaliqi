import "./App.css"
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import MainComponent from "./components/MainComponent/MainComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import ProjectsComponent from "./components/ProjectsComponent/ProjectsComponent";
import ExperienceComponent from "./components/ExperienceComponent/ExperienceComponet";
import EducationComponent from "./components/EducationComponent/EducationComponent";
import ResumeComponent from "./components/ResumeComponent/ResumeComponent";

function App() {
  return (
    <Router>
        <HeaderComponent />
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/projects" element={<ProjectsComponent />} />
            <Route path="/experience" element={<ExperienceComponent />} />
            <Route path="/education" element={<EducationComponent />} />
            <Route path="/resume" element={<ResumeComponent />} />
          </Routes>
        <FooterComponent className="footer" />
    </Router>
  );
}

export default App;
