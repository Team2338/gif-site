import './outreach.scss';
import '../../globals.scss';
import TypeWriter from "typewriter-effect";

function Intro() {
    return (
        <section className="intro">
            <div className="content">
                <div className="left">
                    <div className="wrapper">
                        <h2>
                    <span>
                        <TypeWriter
                            options={{
                                strings: ['Building our diverse community with', 'Innovating for equality with', 'Increasing inclusivity with'],
                                autoStart: true,
                                loop:true
                            }}
                        />
                    </span>
                        </h2>
                        <h1>Outreach at <span className="frc2338-title">Gear it Forward</span></h1>
                    </div>
                </div>
            </div>
            <div className="border"></div>
        </section>
    );
}

export default Intro;