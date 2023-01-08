import "./subteams.scss";
import React, {useState} from "react";

function MechanicalTeam() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="section after-blue mechaicalCaptain-section">
            <div className="content">
                <div className="right">
                    <img src="imgs/IMG_1755.JPG" alt="Captain Photo" className="image-circle" />
                </div>
                <div className="left gray-part">
                    <h1 className="captain-title">Mechanical Sub-Team</h1>
                    <p className="sub-paragraph">Type something here...</p>

                </div>
            </div>
        </section>
    )
}

export default MechanicalTeam;