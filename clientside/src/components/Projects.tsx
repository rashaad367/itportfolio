import React from "react";
import ProjectCards from "../components/ProjectCards";
import image1 from "../assets/helpdesk.png";

const Projects: React.FC = () => {
    return (<>
        <h2 className="sub-heading container-lg" data-aos="fade-in" data-aos-duration="3000">Projects</h2>
        <ProjectCards name="Helpdesk Project" imageUrl={image1} description="A lab dedicated to learning Helpdesk workflows" button1Text="View"/>
    </>)
}

export default Projects;