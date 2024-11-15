import './sponsors.scss';
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
                                        strings: ['Empowering Future Innovators with', 'Fueled by Visionaries like', 'Driving STEM Excellence through'],
                                        autoStart: true,
                                        loop:true
                                    }}
                                    />
                            </span>
                        </h2>
                        <h1>Gear it Forward <span className="frc2338-title">Funded by</span></h1>
                    </div>
                </div>
            </div>
            <div className="border"></div>
        </section>
    );
}

export default Intro;