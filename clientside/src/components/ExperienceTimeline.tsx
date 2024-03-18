import React from "react";
import style from "./ExperienceTimeline.css";


const ExperienceTimelime: React.FC = () => {
    return (<>

        <hr className="container-lg" />
        <div className="container-lg flex">
            <div>
                <h2>Harris Teeter</h2>
                <p>2017 - 2019</p>
                <ul>
                    <li>* Provided efficient and courteous service to customers through using customer service excellence skills.</li>
                    <li>* Performed opening and closing procedures, such as counting the cash register, restocking, and cleaning.</li>
                </ul>
            </div>
            <div className="mx-40">
                <h2>YMCA</h2>
                <p>2018 - 2019</p>
            </div>
            <div className="mx-40">
                <h2>University of North Carolina at Charlotte</h2>
                <p>2020 - 2023</p>
            </div>
            <div className="mr-16">
                <h2>Reunion Marketing</h2>
                <p>2023 - 2024</p>
                <ul>
                    <li>* Collaborated with the SEO team and its different departments to build appealing pages for hundreds of clients.</li>
                    <li>* Assisted in increasing the SEO of our clients so they could generate more leads and have higher conversion rates.</li>
                </ul>
            </div>
            
            
            
           
        </div>

            </>);
}

export default ExperienceTimelime;
