import React from "react";
import style from "./ExperienceTimeline.css";


const ExperienceTimelime: React.FC = () => {
    return (<>

        <hr className="container-lg" />
        <div className="container-lg flex">
            <div>
                <h2>Harris Teeter</h2>
                <p>2017 - 2019</p>
                <ul className="my-16">
                    <li>•	Provided efficient and courteous service to customers through using customer service excellence skills.</li>
                    <li>•	Achieved 100% accuracy in cash register balancing and completed opening and closing tasks within timeframes.</li>
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
                <ul className="my-16">
                    <li>•	Collaborated with the SEO team and launched about 150 web pages a week increasing website traffic by 90%.</li>
                    <li>•	Contributed to increasing our sites SEO, allowing a 15% increase in client lead generation and conversion rates.</li>
                </ul>
            </div>
            
            
            
           
        </div>

            </>);
}

export default ExperienceTimelime;
