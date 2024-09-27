import "../subteams.scss";
import React, {useState} from "react";

function MarketingTeam() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="section after-blue marketingCaptain-section">
            <div className="content">
                <div className="right">
                    <img src="imgs/IMG_1046.jpg" alt="Captain Photo" className="image-circle" />
                </div>
                <div className="left gray-part">
                    <h1 className="captain-title">Marketing</h1>
                    <p className="sub-paragraph">Our marketing subteam develops and manages rollout of new initiatives and campaigns.
                         Using social media to reach stakeholders, they build and maintain 2338’s brand. 
                         Whether it's showing porential investors our yearly robot, or simply posting updates on current team events Marketing works hard to make it happen. 
                         Students resarch potential and connect with new partnerships that align with #FIRSTisForEveryone.</p>
                </div>
            </div>
        </section>
    )
}

export default MarketingTeam;