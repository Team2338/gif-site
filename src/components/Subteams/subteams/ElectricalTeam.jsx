import "../subteams.scss";
import React, {useState} from "react";

function ElectricalTeam() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="section after-blue electricalCaptain-section">
            <div className="content">
                <div className="right">
                    <img src="imgs/Electrical.jpg" alt="Captain Photo" className="image-circle" />
                </div>
                <div className="left gray-part">
                    <h1 className="captain-title">Electrical</h1>
                    <p className="sub-paragraph">Our electrical subteam connects all of our other subteams providing aid on any project with wiring.
                         Throughout the season, students learn about soldering, circuit boards, resistors, pneumatics, connection types, circuitry planning, and so much more.
                         Through prototyping our Outreach (AE: adaptive toys, CHUCK, and other small projects), students are able to apply their newly found knowledge in ways that matter. 
                         All of this practice leads us to well executed, well-organized & tracable wiring, along with secure pneumatics, that make our robot function at its fullest potential. </p>
                </div>
            </div>
        </section>
    )
}

export default ElectricalTeam;