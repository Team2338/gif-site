import './subteams.scss';
import TypeWriter from "typewriter-effect";

function Intro() {
    return (
        <section className="intro-section">
            <div className="content">
                <div className="left">
                    <div className="wrapper">
                        <h2>
                    <span>
                        <TypeWriter
                            options={{
                                strings: ['Write', 'Something', 'Here'],
                                autoStart: true,
                                loop:true
                            }}
                        />
                    </span>
                        </h2>
                        <h1>Sub-Team's at <span className="frc2338-title">Gear it Forward</span></h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;