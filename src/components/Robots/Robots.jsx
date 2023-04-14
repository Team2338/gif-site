import './robots.scss';
import {useState} from "react";
import {ArrowBack, ArrowForward} from "@material-ui/icons";

function Robots(props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            title: "Zephyr",
            img: "imgs/IMG_1755.JPG",
            desc: "Our 2023 Robot for the Charged Up Game, Zephyr oajfoiawjeojfoawejfwoj oijefojaowejf",
            imgDesc: ""
        },
        {
            title: "asddf",
            img: "imgs/IMG_1755.JPG",
            desc: "Michael is a sellout",
            imgDesc: "t"
        },
        {
            title: "bige",
            img: "imgs/IMG_1755.JPG",
            desc: "Michael is a sellout",
            imgDesc: ""
        },
        {
            title: "bige",
            img: "imgs/IMG_1755.JPG",
            desc: "Michael is a sellout",
            imgDesc: ""
        },
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
                                    <p>{d.desc}</p>
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