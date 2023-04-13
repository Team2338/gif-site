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
                    <p className="sub-paragraph">Develops and manages rollout of new initiatives and campaigns, uses social media to reach stakeholders, builds and maintains 2338’s brand, researches potential and connects with new partnerships that align with 2338’s mission that #FIRSTisForEveryone.</p>
                </div>
            </div>
        </section>
    )
}

export default MarketingTeam;