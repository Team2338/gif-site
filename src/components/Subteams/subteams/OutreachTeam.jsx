import '../subteams.scss';
import React, {useState} from "react";

function OutreachTeam() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="section after-blue outreachCaptain-section">
            <div className="content">
                <div className="right">
                    <img src=".\SubTeams Photos\JPG\Outreach_Ico.jpg" alt="Outreach Team" className="image-circle" />
                </div>
                <div className="left">
                    <h1 className="captain-title">Outreach</h1>
                    <p className="sub-paragraph">Our outreach subteam uses our robotics skills to better the community, for example soldering easy-press buttons onto toys for kids that might not be able to play without them.
                         Additionally, we design and engineer a kickball device called CHUCK (Community-Helping Utility Companion for Kickball). 
                         This device allows every kid, regardless of situation, to participate in many fun games. 
                         On top of that, each month we make and deliver STEM kits to underrepresented schools with the goal of making sure every child gets to experience STEM. 
                         The main star of Outreach however, is our yearly Impact (FKA, Chairman´s) Essay. For this we create an essay, video, and presentation about our Impact on the community.</p>
                </div>
            </div>
        </section>
    );
}

export default OutreachTeam;