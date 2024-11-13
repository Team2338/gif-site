import { colors } from "@mui/material";
import "../sponsors.scss";
import React, {useState} from "react";

function CargoHansa() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="section after-blue marketingCaptain-section">
            <div className="content">
                <div className="right">
                    <img src="image" alt="" className="image-circle" />
                </div>
                <div className="left gray-part">
                    <h1 className="captain-title">CargoHansa</h1>
                    <p className="sub-paragraph">Cargohansa, with over 25 years of experience, was founded by Aldin Cavcic and Arnes Cehaic to provide small and mid-sized companies with expert logistics services. 
                        Their team focuses on guiding clients through efficient shipping strategies to support global growth. 
                        Learn more about their approach and expertise on their <a href="https://cargohansa.com/team/" target="_blank" rel="noreferrer">website</a>.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CargoHansa;