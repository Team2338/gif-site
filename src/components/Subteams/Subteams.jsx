import "./subteams.scss";
import ElectricalTeam from "./subteams/ElectricalTeam";
import MarketingTeam from "./subteams/MarketingTeam";
import MechanicalTeam from "./subteams/MechanicalTeam";
import OutreachTeam from "./subteams/OutreachTeam";
import ScoutingTeam from "./subteams/ScoutingTeam";
import SoftwareTeam from "./subteams/SoftwareTeam";
import TeamCaptain from "./subteams/TeamCaptain";
import TeamLeaders from "./subteams/TeamLeaders";
import Intro from "./Intro";

function Subteams() {
    return (
        <>
            <div className="subteam">
                <Intro/>
                <section className="teams">
                    <div className="bo">
                        <TeamCaptain/>
                    </div>
                    <div className="bo">
                        <ElectricalTeam/>
                    </div>
                    <div className="bo">
                        <MarketingTeam/>
                    </div>
                    <div className="bo">
                        <MechanicalTeam/>
                    </div>
                    <div className="bo">
                        <OutreachTeam/>
                    </div>
                    <div className="bo">
                        <ScoutingTeam/>
                    </div>
                    <div className="bo">
                        <SoftwareTeam/>
                    </div>
                    <div className="bo">
                        <TeamLeaders/>
                    </div>
                        
                </section>
            </div>
        </>
    );
}

export default Subteams;