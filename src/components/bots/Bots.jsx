import { useState } from "react";
import { ArrowForward, ArrowBack } from "@material-ui/icons";
import './bots.scss';

function Bots() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon:"./assets/bots/gamePic/2020.png",
            desc: "Our 2020 bot, Prowler. We won the Midwest Regional as Alliance Captain, before COVID cancellations",
            img: "./assets/bots/bots/2020bot.jpg"
        },
        {
            id: "2",
            icon: "./assets/bots/gamePic/2019.svg",
            desc: "",
            img: "./assets/bots/bots/2019.jpg"
        },
        {
            id: "3",
            icon: "",
            desc: "",
            img: ""
        },
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="bots" id="bots">
            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 70}vw)` }}
            >
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ArrowBack
                className="arrow left"
                onClick={() => handleClick("left")}
            />
            <ArrowForward
                className="arrow right"
                onClick={() => handleClick()}
            />
        </div>
    );
}

export default Bots;