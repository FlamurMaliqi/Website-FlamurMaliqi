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
                        <label>Symbole(linkedin) + github</label>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default FooterComponent;
