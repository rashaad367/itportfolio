import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav
      className={`flex items-center justify-between px-4 py-2`}
    >
      <div className="text-white front-bold text-lg">RJ</div>
      <ul className="flex space-x-4">
        <li key="home">
          <a href="/" className="text-white border-2 px-2">
            Home
          </a>
        </li>
        <li key="resume">
          <a href="/resume" className="text-white border-2 px-2">
            Resume/CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
