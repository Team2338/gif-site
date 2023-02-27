import "../subteams.scss";
import React, {useState} from "react";

function ScoutingTeam() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="section after-blue scoutingCaptain-section">
            <div className="content">
                <div className="right">
                    <img src="/imgs/IMG_9233.jpeg" alt="Captain Photo" className="image-circle" />
                </div>
                <div className="left gray-part">
                    <h1 className="captain-title">Scouting </h1>
                    <p className="sub-paragraph">Type something here...</p>

                </div>
            </div>
        </section>
    )
}

export default ScoutingTeam;