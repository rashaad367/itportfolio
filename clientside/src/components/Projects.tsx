import React from "react";
import ProjectCards from "../components/ProjectCards";

const Projects: React.FC = () => {
    return (<>
        <h2 className="sub-heading container-lg" data-aos="fade-in" data-aos-duration="3000">Projects</h2>
        <ProjectCards name="SysAdmin Project" imageUrl="123" description="A lab dedicated to learning SysAdmin workflows" button1Text="View"/>
    </>)
}

export default Projects;