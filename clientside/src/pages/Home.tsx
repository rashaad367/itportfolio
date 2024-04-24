import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ExperienceTimelime from "../components/ExperienceTimeline";
import Projects from "../components/Projects";
import Image from "../assets/photo.jpg";
import Certifications from "../components/Certifications";

const Home: React.FC = () => {
  AOS.init({ once: true });

  return (
    <div>
      <div className="flex flex-col mb-20">
        <div className="mt-8 mb-16">
          <h1 className="heading container-lg" data-aos="fade-right" data-aos-duration="3000">
            Welcome,
          </h1>
          <h2 className="sub-heading container-lg" data-aos="fade-right" data-aos-duration="3000">
            my name is Rashaad Jones.
          </h2>
          <h2 className="container-lg" data-aos="fade-right" data-aos-duration="3000">
            I am an information / cloud technology enthusiast who enjoys dabbling with different technologies.
          </h2>
          <div className="container-lg flex">
            <div className="my-16">
              <h1 className="sub-heading" data-aos="fade-right" data-aos-duration="3000">
                Education
              </h1>
              <div data-aos="fade-right" data-aos-duration="3000">
                <h2>University of North Carolina at Charlotte</h2>
              </div>
            </div>
            <div className="ml-auto flex">
              <img src={Image} height="200" width="200" alt="headshotimage" className="rounded-full" />
            </div>
          </div>
        </div>

        <div>
          <Projects></Projects>
          <div className="my-16"></div>
          <ExperienceTimelime></ExperienceTimelime>
          <Certifications></Certifications>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Home;
