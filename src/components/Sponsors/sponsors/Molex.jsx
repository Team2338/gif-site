import "../sponsors.scss";
import React, {useState} from "react";

function Molex() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="section after-blue marketingCaptain-section">
            <div className="content">
                <div className="right">
                    <img src="image" alt="" className="image-circle" />
                </div>
                <div className="left gray-part">
                    <h1 className="captain-title">Molex</h1>
                    <p className="sub-paragraph">Molex is a global leader in electronic connectivity, developing advanced solutions across industries from automotive to healthcare. 
                        With a focus on quality and innovation, the company addresses complex challenges and supports clients in creating secure, connected products. 
                        Learn more about Molex's vision and solutions <a href="hhttps://www.molex.com/en-us/about" target="_blank" rel="noreferrer">here</a>.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Molex;