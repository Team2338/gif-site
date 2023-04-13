import '../subteams.scss';

function SoftwareTeam() {
    return (
        <>
            <section className="section softwareCaptain-section">
                <div className="content">
                    <div className="right">
                        <img src="imgs/IMG_2448.jpeg" alt="Software" className="image-circle"/>
                    </div>
                    <div className="left">
                        <h1 className="captain-title">Software</h1>
                        <p className="sub-paragraph">
                            Our software subteam is responsible for managing all programming operations on our team.
                            We are split into two primary teams. Our web app team, who are responsible for building our yearly
                            scouting app, as well as our website. Our robot programming team are responsible for developing code for our
                            robot, and ensuring quality of service through performances at competition. We primarily work with electrical
                            to identify what we need to control and identify on the robot, and scouting on our app side to identify what data we need to collect.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SoftwareTeam;