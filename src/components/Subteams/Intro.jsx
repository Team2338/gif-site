import './subteams.scss';
import '../../globals.scss';
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
                                        strings: ['Designing with', 'Building with', 'Coding with'],
                                        autoStart: true,
                                        loop:true
                                    }}
                                    />
                            </span>
                        </h2>
                        <h1>Subteams at <span className="frc2338-title">Gear it Forward</span></h1>
                    </div>
                </div>
            </div>
            <div className="border"></div>
        </section>
    );
}

export default Intro;