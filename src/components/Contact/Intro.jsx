import './contact.scss';
import TypeWriter from "typewriter-effect";

function Intro() {
    return (
        <section className="intro">
            <div className="content">
                <div className="left">
                    <div className="wrapper">
                        <h2>
                            <span>
                                {<TypeWriter
                                    options={{
                                        strings: ['Any business inquires, please', 'Any team or member questions, please', 'All other inquiries, please'],
                                        autoStart: true,
                                        loop:true
                                    }}
                                />}
                            </span>
                        </h2>
                        <h1>Contact <span>Us</span></h1>
                    </div>
                </div>
            </div>
            <div className="border"></div>
        </section>
    );
}

export default Intro;