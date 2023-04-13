import '../subteams.scss';
import React, {useState} from "react";

function OutreachTeam() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="section after-blue outreachCaptain-section">
            <div className="content">
                <div className="right">
                    <img src="/imgs/imagejpeg_1.jpg" alt="Captain Photo" className="image-circle" />
                </div>
                <div className="left">
                    <h1 className="captain-title">Outreach</h1>
                    <p className="sub-paragraph">Outreach is one of the great opportunities available on the team. Outreach has an overall job to use our robotics skills to better the community. We solder easy-press buttons onto toys in order to make them more inclusive because some kids might not be able to play with them otherwise. Additionally, we create and design a kickball device called CHUCK (Community-Helping Utility Companion for Kickball). This device allows every kid, regardless of their mobility, to participate in games.
                        On top of that, we make monthly STEM kits and send them out to underrepresented schools in order to introduce STEM to the young generation. The main star of Outreach is our Impact, formally Chairman´s, Essay. We make an impact essay, video, and summary every year and submit it to FIRST.</p>

                </div>
            </div>
        </section>
    );
}

export default OutreachTeam;