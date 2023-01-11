import "./subteams.scss";
import TeamCaptain from "./Sub-Teams/TeamCaptain";
import SoftwareTeam from "./Sub-Teams/SoftwareTeam";
import OutreachTeam from "./Sub-Teams/OutreachTeam";
import MechanicalTeam from "./Sub-Teams/MechanicalTeam";
import ScoutingTeam from "./Sub-Teams/ScoutingTeam";
import MarketingTeam from "./Sub-Teams/MarketingTeam";
import ElectricalTeam from "./Sub-Teams/ElectricalTeam";
import Intro from "./Intro";

function Subteams() {
    return (
        <>
            <div className="subteam">
                <Intro/>
                <section className="teams">
                    <TeamCaptain/>
                    <SoftwareTeam />
                    <OutreachTeam />
                    <MechanicalTeam />
                    <ScoutingTeam />
                    <MarketingTeam />
                    <ElectricalTeam />
                </section>
            </div>
        </>
    );
}

export default Subteams;