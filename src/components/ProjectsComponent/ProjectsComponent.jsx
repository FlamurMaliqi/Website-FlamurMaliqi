import "./ProjectsComponent.css"
import ProjectComponent from "../ProjectComponent/ProjectComponent.jsx"


function ProjectsComponent() {
    return (
        <div>
            <h1 className="projects-header">Projects</h1>
            <hr className="line"></hr>
            <div className="projects-container">
                <ProjectComponent/>
                <ProjectComponent/>
                <ProjectComponent/>
            </div>
        </div>
    )
}

export default ProjectsComponent;