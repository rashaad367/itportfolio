import React from "react";
import { saveAs } from "file-saver";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";



const NavBar: React.FC = () => {
 const pdfUrl =
    "https://www.dropbox.com/scl/fi/guffkljs4bttuv1yzjwu4/rashaadsitresume.pdf?rlkey=vw8y5lhjf0zrmnmh4p1owj18l&dl=0";

  const downloadPdf = () => {
    saveAs(pdfUrl, "resume.pdf");
  };

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
          <a onClick={downloadPdf} className="text-white border-2 px-2 cursor-pointer">
            Resume/CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
