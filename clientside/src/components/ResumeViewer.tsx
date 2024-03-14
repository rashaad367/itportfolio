import React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { saveAs } from "file-saver";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const ResumeViewer: React.FC = () => {
  const pdfUrl =
    "https://www.dropbox.com/scl/fi/5ao5vgbzjz4zrpqjyzh7h/resume.pdf?dl=0&rlkey=54g92hfmbnbe0echj6mrfoaqz";

  const downloadPdf = () => {
    saveAs(pdfUrl, "resume.pdf");
  };

  return (
    <div>
      <button className="mb-8 font-bold font-mono" onClick={downloadPdf}>
        Download PDF
      </button>
      <div className="container shadow-2xl border ">
        <div className="font-serif my-20 mx-12">
          <p className="center font-bold text-2xl">Rashaad Jones</p>
          <p className="text-sm leading-6">
            <strong className="text-lg">EDUCATION:</strong>
            <br />{" "}
            <div className="flex justify-between -mb-4 font-bold">
              <p className="">
                The University of North Carolina at Charlotte (UNCC) ,
                Charlotte, NC
              </p>
              <p>May 2023</p>
            </div>
            <br />
            <div className="flex justify-between -mb-6 ">
              <p className="">
                Bachelor of Science in Computer Science | Concentration:
                Software Engineering | Minor: Psychology
              </p>
              <p>GPA: 3.69</p>
            </div>
            <br /> Honors: Chancellor’s List: Fall 2020 and Spring 2022 | Dean’s
            List: Spring 2020, Spring 2021, and Fall 2021 <br /> Relevant
            Courses: Web App Design & Development; Network App Development;
            Database Design & Implementation
          </p>
          <hr />
          <p className="text-sm mb-4 leading-6">
            <strong className="text-lg">TECHNICAL SKILLS:</strong>
            <br />
            Skills: React, TypeScript, JavaScript, Java, Express.js, Bootstrap,
            Tailwind, Sass, MySQL, MongoDB, Scrum, Git, Node.js, Agile, jQuery,
            Front-end design, RESTful APIs, Express, Mongoose CRUD, APIs, HTML,
            CSS
          </p>
          <hr />
          <p className="text-sm mb-4 leading-6">
            <strong className="text-lg">RELEVANT PROJECT EXPERIENCE:</strong>
            <br />
            <div className="flex justify-between -mb-4 font-bold">
              <p className="">Project 1: RSVP Meetup Website</p>
              <p> January - May 2023</p>
            </div>
            <br />
            <ul>
              <li>
                + Created a responsive, visually appealing front-end design for
                the meet-up website using Bootstrap, implementing features such
                as grid layout.
              </li>
              <li>
                + Created a scalable server using Node.js and linked it with
                MongoDB using the MongoDB Atlas Cloud to develop a dynamic
                website.
              </li>
              <li>
                + Designed and implemented RESTful APIs using Express and
                Mongoose CRUD functionalities to enable seamless data exchange
                between the server and website, increasing website
                functionality.
              </li>
            </ul>
          </p>
          <p className="text-sm mb-4 leading-6">
            <div className="flex justify-between -mb-4 font-bold">
              <p className="">Project 2: InTheLoop App</p>
              <p> January - April 2023</p>
            </div>
            <br />
            <ul>
              <li>
                + Successfully implemented a login system with password
                encryption to enhance user authentication and security,
                resulting in a streamlined login process.
              </li>
              <li>
                + Leveraged Google’s Maps API to design and develop innovative
                mapping solutions, enabling users to interact with geospatial
                data in real-time.
              </li>
              <li>
                + Collaborated with a team using the Agile methodology to
                deliver a high-quality application.
              </li>
            </ul>
          </p>
          <p className="text-sm mb-4 leading-6">
            <div className="flex justify-between -mb-4 font-bold">
              <p className="">Project 3: Sudoku 9x9</p>
              <p> December 2022 - January 2023</p>
            </div>
            <br />
            <ul>
              <li>
                {" "}
                + Created a sudoku game with randomized number placement using
                JavaScript, CSS, and HTML.
              </li>
              <li>
                {" "}
                + Implemented a website cookie system to allow for customization
                of game settings, such as board color and difficulty.
              </li>
              <li>
                + Enhanced the functionality and user experience of the game by
                utilizing jQuery and other plugins.
              </li>
            </ul>
          </p>
          <hr />
          <p className="text-sm leading-6">
            <strong className="text-lg">WORK EXPERIENCE:</strong> <br />
            <div className="flex justify-between -mb-4 font-bold">
              <p className="">Harris Teeter, Cashier, Cary, NC</p>
              <p> June 2017 – November 2019</p>
            </div>
            <br />
            <ul>
              <li>
                + Handled the cash register with speed and precision to make
                waiting lines for customers go faster.
              </li>
              <li>
                + Served customers with enthusiasm and politeness, resulting in
                praise from customers.{" "}
              </li>
              <li>
                + Educated new workers on how to work the cash register by
                explaining PLU numbers for produce and showing them how to carry
                out basic operations for the cash register.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeViewer;
