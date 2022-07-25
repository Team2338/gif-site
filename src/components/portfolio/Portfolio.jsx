import { useState, useEffect } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { featuredPortfolio, technicalPortfolio, outreachPortfolio } from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "technical",
            title: "Technical",
        },
        {
            id: "outreach",
            title: "Outreach",
        },
    ]


    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "technical":
                setData(technicalPortfolio);
                break;
            case "outreach":
                setData(outreachPortfolio);
                break;
            default:
                setData(featuredPortfolio);
                break;
        }
    }, [selected]);
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div
                        className="item"
                    >
                        <a href={d.link} target="_blank" rel="noreferrer noopenner">
                            <img
                                src={d.img}
                                alt=""
                            />
                        </a>
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
;