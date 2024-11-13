import "../sponsors.scss";
import React, {useState} from "react";

function Caterpillar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="section after-blue marketingCaptain-section">
            <div className="content">
                <div className="right">
                    <img src="public\imgs\sponsors\CAT.jpg" alt="" className="image-circle" />
                </div>
                <div className="left gray-part">
                    <h1 className="captain-title">Caterpillar</h1>
                    <p className="sub-paragraph">Caterpillar Inc. is a global leader in construction and mining equipment, engines, and industrial power solutions, delivering innovation and sustainability in over 190 countries. 
                        For nearly a century, Caterpillar has powered infrastructure, fueled economies, and supported communities worldwide. 
                        Discover more about Caterpillar’s mission, values, and history <a href="https://www.caterpillar.com/en/company.html" target="_blank" rel="noreferrer">here</a>.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Caterpillar;