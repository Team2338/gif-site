import './subteams.scss';
import React, {useState} from "react";

function OutreachTeam() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="section after-blue outreachCaptain-section">
            <div className="content">
                <div className="right">
                    <img src="imgs/IMG_1755.JPG" alt="Captain Photo" className="image-circle" />
                </div>
                <div className="left">
                    <h1 className="captain-title">Outreach Sub-Team</h1>
                    <p className="sub-paragraph">Type something here...</p>

                </div>
            </div>
        </section>
    );
}

export default OutreachTeam;