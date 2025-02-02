
import "./HeaderComponent.css"

function HeaderComponent() {
    return (
        <div className="header">
            <ul className="header-components">
                <li className="name-header">
                    <a href="/">&lt;/&gt; Flamur Maliqi</a>
                </li>
                <li className="name-header tabs">
                    <a href="/projects">Projects</a>
                </li>
                <li className="name-header tabs">
                    <a href="/experience">Experience</a>
                </li>
                <li className="name-header tabs">
                    <a href="/education">Education</a>
                </li>
                <li className="name-header tabs">
                    <a href="/resume">Resume</a>
                </li>
            </ul>
        </div>
    );
  }
  
export default HeaderComponent;
  