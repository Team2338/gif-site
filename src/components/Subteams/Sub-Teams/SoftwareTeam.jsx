import '../subteams.scss';
import React, { useState } from "react";

function SoftwareTeam() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="section softwareCaptain-section">
                <div className="content">
                    <div className="right">
                        <img src="imgs/IMG_1755.JPG" alt="Software" className="image-circle"/>
                    </div>
                    <div className="left">
                        <h1 className="captain-title">Software Sub-Team</h1>
                        <p className="sub-paragraph">Type something here...</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SoftwareTeam;