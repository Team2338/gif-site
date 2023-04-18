import './robots.scss';
import {useState} from "react";
import {ArrowBack, ArrowForward} from "@material-ui/icons";

function Robots(props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            title: "Zephyr",
            img: "imgs/bots/2023bot.jpg",
            desc: "Charged Up",
            imgDesc: ""
        },
        {
            title: "Viper",
            img: "imgs/bots/mickschumi.jpg",
            desc: "Michael is a sellout",
            imgDesc: "t"
        },
        {
            title: "Prowler",
            img: "imgs/bots/yewre.jpg",
            desc: "Michael is a sellout",
            imgDesc: ""
        },
        {
            title: "Vanguard",
            img: "imgs/bots/rembo.jpg",
            desc: "Michael is a sellout",
            imgDesc: ""
        },
        {
            title: "Chef",
            img: "imgs/bots/yesrer.jpg",
            desc: "Michael is a sellout",
            imgDesc: ""
        },
        {
            title: "Flatline",
            img: "imgs/bots/flynn.jpg",
            desc: "Michael is a sellout",
            imgDesc: ""
        },
        {
            title: "Flynn Rider",
            img: "imgs/bots/2016bot.jpg",
            desc: "Michael is a sellout",
            imgDesc: ""
        },
        {
            title: "Phantom",
            img: "imgs/bots/patrick2015.jpg",
            desc: "Michael is a sellout",
            imgDesc: ""
        },
        {
            title: "Fumper",
            img: "imgs/bots/2014bot.jpg",
            desc: "Michael is a sellout",
            imgDesc: ""
        }
    ]

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    };

    return (
        <div className="Robots" id="robots">
            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw` }}
            > 
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <h2>{d.title}</h2>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt={d.imgDesc} />
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

export default Robots;