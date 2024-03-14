import React from "react";
import ResumeViewer from "../components/ResumeViewer";
import AOS from "aos";
import "aos/dist/aos.css";

const Resume: React.FC = () => {
  AOS.init({ once: true });

  return (
    <div className="flex flex-col">
      <div className="mt-8 mb-16">
        <h1
          className="heading container-lg"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          My Resume.
        </h1>
        <div data-aos="fade-in" data-aos-duration="3000">
          <ResumeViewer />
        </div>
      </div>
    </div>
  );
};

export default Resume;
