import './subteams.scss';

function TeamCaptain() {
    return (
        <section className="section TeamCaptain-section">
            <div className="content">
                <div className="right">
                    <img src="../../../public/assests/.." alt="Captains" className="image-circle" />
                </div>
                <div className="left">
                    <h1 className="captain-title">Aaron Fowler</h1>
                    <h3 className="role-title">Team Captain</h3>
                    <p className="about-leader">Text input here... About leader</p>
                </div>
            </div>
        </section>
    );
}

export default TeamCaptain;