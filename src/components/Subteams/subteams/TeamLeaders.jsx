import '../subteams.scss';

function TeamLeaders() {
    return (
        <>
            <section className="section teamLeaders-section">
                <div className="content">
                    <div className="right">
                        <img src=".\SubTeams Photos\JPG\TeamLeader_Ico.jpg" alt="Team Leaders" className="image-circle" />
                    </div>
                    <div className="left">
                        <h1 className="captain-title">Team Leaders</h1>
                        <p className="sub-paragraph">Our Team Leaders lead our team. 
                            By having one Team Leader per subteam (AE: Electrical, Marketing, Programming, etc.) we can maintain a streamlined and safe enviroment while working on the bots. 
                            Our Team Captains also insure that we have everything completed by the due date. 
                            Becoming a Team Leader is a lot of work, and requires dedication. 
                            However it is worth it as the students get to experience what it is like to be a company manager and similar jobs early on.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TeamLeaders;