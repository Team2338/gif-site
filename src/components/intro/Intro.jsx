import './intro.scss';
import { ArrowDownward } from "@material-ui/icons";
import TypeWriter from 'typewriter-effect';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider)

function Intro() {
    return (
        <div className="intro" id="home">
            <div className="left">
                <AutoplaySlider
                    className="awesomeSlider"
                    play={true}
                    cancelOnInteraction={false}
                    interval={3500}
                    infinite={true}
                    bullets={false}
                    media={[
                        {
                            source: 'assets/carousel/p1.jpg'
                        },
                        {
                            source: 'assets/carousel/p2.jpg'
                        },
                        {
                            source: 'assets/carousel/p3.jpg'
                        },
                        {
                            source: 'assets/carousel/p4.jpg'
                        },
                        {
                            source: 'assets/carousel/p5.jpg'
                        },
                        {
                            source: 'assets/carousel/p6.jpg'
                        },
                        {
                            source: 'assets/carousel/p7.jpg'
                        }
                    ]}
                />
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>We're</h2>
                    <h1>Team 2338: Gear It Forward</h1>
                    <h3>A FIRST Robotics Competition Team from Oswego, Illinois, <span>
                        <TypeWriter
                            options={{
                                strings: ['Making an impact', 'Creating STEM Opportunities', 'Building the Future'],
                                autoStart: true,
                                loop: true,
                            }} />
                    </span></h3>
                </div>
                <a href="#bots">
                    <ArrowDownward className="img" />
                </a>
            </div>
        </div>
    );
}

export default Intro;