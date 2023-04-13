import "../subteams.scss";
import React, {useState} from "react";

function ElectricalTeam() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="section after-blue electricalCaptain-section">
            <div className="content">
                <div className="right">
                    <img src="imgs/IMG_8739.jpeg" alt="Captain Photo" className="image-circle" />
                </div>
                <div className="left gray-part">
                    <h1 className="captain-title">Electrical</h1>
                    <p className="sub-paragraph">Our electrical subteam connects with all of our other subteams as we provide aid with any project with wiring. Throughout the season, students learn about soldering, circuit boards, resistors, pneumatics different connections, planning electrical circuitry, and so much more. Through prototyping, adaptive toys, CHUCK, and other small projects, students are able to apply their knowledge. All of this practice leads us to well executed and well organized wiring and pneumatics that is secure, is easily traceable, and makes our great robot function at its full potential. </p>
                </div>
            </div>
        </section>
    )
}

export default ElectricalTeam;