import "../subteams.scss";
import React, {useState} from "react";

function MechanicalTeam() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="section after-blue mechaicalCaptain-section">
            <div className="content">
                <div className="right">
                    <img src="imgs/Mechanical2024.jpg" alt="Captain Photo" className="image-circle" />
                </div>
                <div className="left gray-part">
                    <h1 className="captain-title">Mechanical</h1>
                    <p className="sub-paragraph">The Mechanical Subteam is responsible for all design and fabrication of our compittion bots. We run tool and safety training to insure that our shop remains productive and safe. Our design work is done in CAD software, most commonly Autodesk Inventor. Teamwork between subteams is one of the many skills Gear it Forward works to instill in its members. Working with the Electrical and Programing team allows us to quickly and confidently field a world class robot every year.</p>
                </div>
            </div>
        </section>
    )
}

export default MechanicalTeam;