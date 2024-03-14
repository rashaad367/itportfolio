import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home: React.FC = () => {
  AOS.init({ once: true });

  return (
    <div>
      <div className="flex flex-col mb-20">
        <div className="mt-8 mb-16">
          <h1
            className="heading container-lg"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            Welcome,
          </h1>
          <h2
            className="sub-heading container-lg"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            my name is Rashaad Jones.
          </h2>
          <h2 className="container-lg" data-aos="fade-right" data-aos-duration="3000">
            I am an information / cloud technology enthusiast who enjoys dabbling with different
            technologies.
          </h2>
          <div className="container-lg flex">
            <div className="my-16">
            </div>
            <div className="my-16">
              <h1
                className="sub-heading"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                Education
              </h1>
              <div data-aos="fade-right" data-aos-duration="3000">
                <h2>University of North Carolina at Charlotte</h2>
                
              </div>
            </div>
          </div>
          <div className="flex justify-end container-lg">
           
          </div>
        </div>
        <div className="center">
          <h2 className="sub-heading my-4" data-aos="fade-in" data-aos-duration="3000">Projects</h2>
          <h2 className="sub-heading" data-aos="fade-in" data-aos-duration="3000">Abilities</h2>
        </div>
        
        <div>
        </div>
      </div>
    </div>
  );
};

export default Home;
