import "./HeaderComponent.css"

function HeaderComponent() {
    return (
        <div className="header">
            <ul className="header-components">
                <li className="name-header">
                    <div className="name-symbol">&lt;/&gt; </div>
                    <a href="/">Flamur Maliqi</a>
                </li>
                <li className="name-header first-element">
                    <img src="../../../public/Project-icon.svg" className="headerIcon"></img>
                    <a href="/projects">Projects</a>
                </li>
                <li className="name-header">
                    <img src="../../../public/Experience-icon.svg" className="headerIcon"></img>
                    <a href="/experience">Experience</a>
                </li>
                <li className="name-header">
                    <img src="../../../public/Education-icon.svg" className="headerIcon"></img>
                    <a href="/education">Education</a>
                </li>
                <li className="name-header last-element">
                    <img src="../../../public/Resume-icon.svg" className="headerIcon"></img>
                    <a href="/resume">Resume</a>
                </li>
            </ul>
        </div>
    );
  }
  
export default HeaderComponent;
  