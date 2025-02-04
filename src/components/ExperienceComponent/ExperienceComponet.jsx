import "./ExperienceComponent.css"
import JobComponent from "../JobComponent/JobComponent.jsx";


function ExperienceComponent() {
    return (
        <div>
            <h1 className="experience-header">Experience</h1>
            <div className="jobs-container">
                <JobComponent></JobComponent>
                <JobComponent></JobComponent>
                <JobComponent></JobComponent>
            </div>
        </div>
    )
}

export default ExperienceComponent;