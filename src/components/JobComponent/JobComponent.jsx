import "./JobComponent.css"

function JobComponent() {
    return (
        <div className="job-container">
            <div >
                <img src="../../../public/AudiLogo.png" className="job-image"></img>
            </div>
            <div className="content">
                <div className="job-title">Software Development Engineer</div>
                <div className="job-tags">
                    <label className="job-tag">Internship</label>
                    <label className="job-tag">On-Site</label>
                </div>
                <div className="job-dates"> February 2025 - Present</div>
                <div className="job-duration"> 3 Months</div>
                <div className="job-description">
                • Developed and maintained Java-based backend services using Quarkus.io, including deployment and management of containerized applications with Kubernetes and OpenShift, ensuring scalability and high availability.
                <br></br>
                • Designed and executed sanity, regression, and error tests with Quarkus, while developing CI/CD pipelines in Jenkins to automate testing and streamline deployments.
                </div>
            </div>
        </div>
    )
}

export default JobComponent;