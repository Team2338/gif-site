import "./subteams.scss";
import Modal from "./Modal";
import React, {useState} from "react";

function ScoutingTeam() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="section after-blue scoutingCaptain-section">
            <div className="content">
                <div className="right">
                    <img src="../../../public/assests/.." alt="Captain Photo" className="image-circle" />
                </div>
                <div className="left gray-part">
                    <h1 className="captain-title">Scouting Sub-Team</h1>
                    <p className="sub-paragraph">Type something here...</p>
                    <div className="modal-popup" onClick={() => console.log('clicked')}>
                        <button className="learn-button" onClick={() => setIsOpen(true)}>Learn More</button>

                        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                            <h3 className="captain-title">Scouting Sub-Team</h3>
                            <p>A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose.</p>
                            <img src="../../../public/assests/image/favicon.ico" alt="Sub Team Photo" className="image-circle" />
                        </Modal>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ScoutingTeam;