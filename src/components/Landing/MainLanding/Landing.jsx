import './landing.scss';
import TypeWriter from "typewriter-effect";

function Landing(props) {
    return (
        <div className="Landing" id="landing">
            <div className="Content">   
                <div className="left">
                    <img alt="" src="imgs/2024FullTeam.jpg"/>
                </div>
                <div className="right">
                    <div className="wrapper">
                        <h2>We are</h2>
                        <h1>Team 2338: Gear It Forward</h1>
                        <h3>A FIRST Robotics Competition Team <br />from Oswego, Illinois
                            <span>
                                <TypeWriter
                                    options={{
                                        strings: ['Making an impact', 'Creating STEM Opportunities', 'Building the Future'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </h3>
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#7EBDC2" d="M28.4,-35.5C37.9,-19,47.4,-9.5,49.4,2C51.4,13.6,46,27.1,36.6,40.2C27.1,53.2,13.6,65.8,-3.9,69.8C-21.4,73.7,-42.9,69,-58.6,55.9C-74.4,42.9,-84.4,21.4,-83.2,1.2C-82,-19,-69.5,-38,-53.7,-54.5C-38,-71,-19,-85,-4.8,-80.3C9.5,-75.5,19,-52,28.4,-35.5Z" transform="translate(100 100)" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;