import './details.scss';
import Ticker from "react-ticker";

const data = [
    {
        title: "a",
        desc: "a",
        img: "imgs/IMG_1755.JPG",
        bgcolor: "#FFFFFF",
        tcolor: "#000000",
        dcolor: "#000000"
    }
]

const ds = () => {
    return (
        <div className="sliding">
            {data.map((d) => (
                <div className="container" style={{ backgroundColor: d.bgcolor}}>
                    <div className="header">
                        <img src={d.img}/>
                    </div>
                    <div className="text">
                        <h2 style={{ color: d.tcolor }}>
                            {d.title}
                        </h2>
                        <p style={{ color: d.dcolor }}>
                            {d.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

function Details(props) {
    return (
        <div className="dt">
            <div className="l1">
                <div className="left">
                    <h2>What is <i>FIRST</i> & <i>FRC?</i></h2>
                    <p>
                        *TEMP* Combining the excitement of sport with the rigors of science and technology. We call FIRST Robotics Competition the ultimate Sport for the Mind. High-school student participants call it “the hardest fun you’ll ever have.”
                    </p>
                </div>
                <div className="right">
                    <img className="hayden" src="/imgs/IMG_1755.JPG" alt="" />
                </div>
            </div>
            <div className="l2">
                <Ticker speed={8}>
                    {() => <ds />}
                </Ticker>
            </div>
        </div>
    );
}

export default Details;