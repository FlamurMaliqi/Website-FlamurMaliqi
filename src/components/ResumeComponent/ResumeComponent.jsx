import "./ResumeComponent.css";

function ResumeComponent() {
  return (
    <div className="resume">
      <h1 className="resume-header">Resume</h1>
      <div className="resume-container">
        <object
          data="../../../public/Resume.pdf#zoom=120"  
          type="application/pdf"
          width="100%"  
          height="800px" 
        >
          Ihr Browser unterstützt keine PDF-Dokumente.
        </object>
      </div>
    </div>
  );
}

export default ResumeComponent;
