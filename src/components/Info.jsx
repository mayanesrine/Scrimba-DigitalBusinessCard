export default function Info() {
    return (
        <header className="header">
            <div className="profile-pic"></div>
            <div className="details">
                <h2 className="details-name">Laura Smith</h2>
                <h4 className="details-role">Frontend Developer</h4>
                <h6 className="details-website">laurasmith.website</h6>
            </div>
            <div className="buttons">
                <a href="#" className="button-email">
                    <img src="/src/assets/email-icon.png" />
                    Email
                </a>
                <a href="#" className="button-linkedin">
                    <img src="/src/assets/linkedin-icon.png" />
                    LinkedIn
                </a>
            </div>
        </header>
    );
}