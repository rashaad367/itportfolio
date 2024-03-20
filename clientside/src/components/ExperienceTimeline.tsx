import React from "react";
import style from "./ExperienceTimeline.css";


const ExperienceTimelime: React.FC = () => {
    return (<>

        <hr className="container-lg" />
        <div className="container-lg flex">
            <div>
                <h2 className="my-2">Harris Teeter</h2>
                <p>2017 - 2019</p>
                <ul className="my-12">
                    <li className="my-3">•	Provided efficient and courteous service to customers by utilizing customer service excellence skills, occasionally earning praise from customers.</li>
                    <li>•	Achieved 100% accuracy in cash register balancing and completed opening and closing tasks within designated timeframes in preparation for the next shift worker.</li>
                </ul>
            </div>
            <div className="mx-40">
                <h2 className="my-2">YMCA</h2>
                <p>2018 - 2019</p>
                <ul className="my-12">
                    <li className="my-3">•	Streamlined maintenance procedures by implementing proactive inspection schedules, resulting in reduced downtime and enhanced facility efficiency.</li>
                    <li>•	Revitalized cleanliness standards through the development and implementation of a comprehensive cleaning protocol, resulting in a pristine and hygienic environment for YMCA members and staff.</li>
                </ul>
            </div>
            <div className="mx-40">
                <h2 className="my-2">University of North Carolina at Charlotte</h2>
                <p>2020 - 2023</p>
                <ul className="my-12">
                    <li className="my-3">•	Mastered advanced concepts in operating systems and networks through rigorous coursework, gaining proficiency in system administration, network configuration, and troubleshooting methodologies.</li>
                    <li>•	Innovated network-based application development projects, leveraging cutting-edge technologies to create robust and scalable solutions, showcasing adeptness in programming languages and network protocols.</li>
                </ul>
            </div>
            <div className="mr-16">
                <h2 className="my-2">Reunion Marketing</h2>
                <p>2023 - 2024</p>
                <ul className="my-12">
                    <li className="my-3">•	Collaborated with the SEO team to launch about 500 web pages a week, increasing website traffic by 90% on average, with a group of 4, thereby boosting growth for our company and clients.</li>
                    <li>•	Enhanced workflow efficiency by up to 10% monthly through proactive ticketing with the software operations team, facilitating load and structure between different departments, with a group of 5.</li>
                </ul>
            </div>
            
            
            
           
        </div>

            </>);
}

export default ExperienceTimelime;
