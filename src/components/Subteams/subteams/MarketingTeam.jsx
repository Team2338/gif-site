import "../subteams.scss";
import React, {useState} from "react";

function MarketingTeam() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="section after-blue marketingCaptain-section">
            <div className="content">
                <div className="right">
                    <img src="imgs/IMG_8738.jpeg" alt="Captain Photo" className="image-circle" />
                </div>
                <div className="left gray-part">
                    <h1 className="captain-title">Marketing</h1>
                    <p className="sub-paragraph">They do stuff, I'm told (I know that it's all Ms. N tho).</p>

                </div>
            </div>
        </section>
    )
}

export default MarketingTeam;