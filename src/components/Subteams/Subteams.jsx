import "./subteams.scss";
import TeamCaptain from "./subteams/TeamCaptain";
import SoftwareTeam from "./subteams/SoftwareTeam";
import OutreachTeam from "./subteams/OutreachTeam";
import MechanicalTeam from "./subteams/MechanicalTeam";
import ScoutingTeam from "./subteams/ScoutingTeam";
import MarketingTeam from "./subteams/MarketingTeam";
import ElectricalTeam from "./subteams/ElectricalTeam";
import Intro from "./Intro";

function Subteams() {
    return (
        <>
            <div className="subteam">
                <Intro/>
                <section className="teams">
                    <div className="bo">
                        <SoftwareTeam/>
                    </div>
                    <div className="bo">
                        <ElectricalTeam/>
                    </div>
                    <div className="bo">
                        <MechanicalTeam/>
                    </div>
                    <div className="bo">
                        <OutreachTeam/>
                    </div>
                    <div className="bo">
                        <MarketingTeam/>
                    </div>
                    <div className="bo">
                        <ScoutingTeam/>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Subteams;