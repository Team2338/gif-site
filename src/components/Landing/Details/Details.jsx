import './details.scss';

function Details(props) {
    return (
        <div className="dt">
            <div className="l1">
                <div className="left">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#7EBDC2" d="M35.9,-39.7C50.7,-30.3,69.8,-23,72.2,-12.3C74.6,-1.6,60.3,12.5,48.7,23.9C37.1,35.3,28.1,44,16.1,51.5C4.1,59,-11,65.3,-19.9,59.8C-28.7,54.3,-31.3,37,-38.7,23C-46,9,-57.9,-1.7,-57.3,-10.9C-56.6,-20.1,-43.3,-28,-31.7,-37.9C-20,-47.9,-10,-60,0.3,-60.3C10.5,-60.6,21.1,-49.1,35.9,-39.7Z" transform="translate(100 100)" />
                    </svg>
                    <h2>What is <i>FIRST</i> & <i>FRC?</i></h2>
                    <p>
                        FIRST is a global robotics community preparing students for the future and is the world's leading youth-serving nonprofit for STEM education.
                        First Robotics combines the excitement of sport with the rigors of science and technology. Students sometimes refer to it as “the hardest fun you’ll ever have.”
                    </p>
                </div>
                <div className="right">
                    <img className="hayden" src="/imgs/IMG_9249.jpeg" alt="" />
                </div>
            </div>
            <div className="l2">
                <div className="left">

                </div>
                <div className="right">
                </div>
            </div>
        </div>
    );
}

export default Details;