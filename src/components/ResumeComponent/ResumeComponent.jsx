import "./ResumeComponent.css";

function ResumeComponent() {
  return (
    <div className="resume">
      <h1 className="resume-header">Resume</h1>
      <div className="resume-container">
        {/* Verwenden des object-Tags mit Zoom-Parameter */}
        <object
          data="../../../public/Resume.pdf#zoom=120"  // Hier den richtigen Pfad zur PDF-Datei und den Zoom-Parameter setzen
          type="application/pdf"
          width="100%"  // Volle Breite
          height="800px" // Höhe anpassen
        >
          Ihr Browser unterstützt keine PDF-Dokumente.
        </object>
      </div>
    </div>
  );
}

export default ResumeComponent;
