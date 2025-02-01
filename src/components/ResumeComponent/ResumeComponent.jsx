import "./ResumeComponent.css";

function ResumeComponent() {
  return (
    <div className="resume">
      <h1 className="resume-header">Resume</h1>
      <div className="resume-container">
        <iframe
          src="../../../public/Resume.pdf"
          width="80%"
          height="800px"
          title="Lebenslauf Vorschau"
        />
      </div>
    </div>
  );
}

export default ResumeComponent;
