import "./FooterComponent.css"

function FooterComponent() {
    return (
        <div className="footer">
            <ul className="footer-component">
                <li>
                    <div className="footer-element">
                        <label className="footer-title">Phone</label>
                        <label>+49 162 368 5247</label>
                    </div>
                </li>
                <li>
                    <div className="footer-element">
                        <label className="footer-title">E-Mail</label>
                        <label>contact@flamur-maliqi.de</label>
                    </div>
                </li>
                <li>
                    <div className="footer-element">
                        <label className="footer-title">Follow</label>
                        <div>
                            <a href="https://www.linkedin.com/in/flamur-m-1a8267258/">
                                <img src="../../../public/linkedin.png" className="footer-symbol"></img>
                            </a>
                            <a href="https://github.com/FlamurMaliqi">
                                <img src="../../../public/github-logo.png" className="footer-symbol"></img>
                            </a>
                            <a href="https://linktr.ee/flamurmaliqi">
                                <img src="../../../public/linktree-logo-icon.png" className="footer-symbol"></img>
                            </a>
                    </div>
                        </div>
                </li>
            </ul>
        </div>
    )
}

export default FooterComponent;
