import React from "react";
import ProjectCards from "../components/ProjectCards";

const Projects: React.FC = () => {
    return (<>
        <h2 className="sub-heading container-lg" data-aos="fade-in" data-aos-duration="3000">Projects</h2>
        <ProjectCards name="123" imageUrl="123" description="123" button1Text="123"/>
    </>)
}

export default Projects;