import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SocialButton from "./components/SocialButtonProps";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import NoPage from "./pages/NoPage";
import Project1 from "./pages/Project1";

const App: React.FC = () => {
  const githubUrl = "https://github.com/rashaad367";
  const linkedinUrl = "https://www.linkedin.com/in/rashaad-jones-5a59b6220";

  return (
    <div>
      {/* Major components, partials, etc. */}
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/project1" element={<Project1 /> }/>
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <div className="fixed-bl">
      </div>
    </div>
  );
};

export default App;

{
  /* ;alskdjf */
}
