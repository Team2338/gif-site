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
                    <p className="sub-paragraph">Our mechanical Subteam is responsible for designing and fabricating all our compittion bots. 
                        Students go through tool and safety training to insure that our shop remains productive and safe. 
                        Our design work is done in CAD software, usually Autodesk Inventor. 
                        Working with the Electrical and Programing subteams allows us to quickly and confidently field a world class competition bot every year.</p>
                </div>
            </div>
        </section>
    )
}

export default MechanicalTeam;