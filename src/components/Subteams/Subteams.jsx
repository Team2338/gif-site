import "./subteams.scss";
import TeamCaptain from "./TeamCaptain";
import SoftwareTeam from "./SoftwareTeam";
import OutreachTeam from "./OutreachTeam";
import MechanicalTeam from "./MechanicalTeam";
import ScoutingTeam from "./ScoutingTeam";
import MarketingTeam from "./MarketingTeam";
import ElectricalTeam from "./ElectricalTeam";
import Intro from "./Intro";

function Subteams() {
    return (
        <>
            <div className="subteam">
                <Intro/>
                <section className="teams">
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