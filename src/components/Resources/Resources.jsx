import './resources.scss';
import YouTube from "react-youtube";

function Resources(props) {

    const trainingList =
        [
            {title:'Java', link:'https://tinyurl.com/2338Java'}, //https://docs.google.com/presentation/d/1lubf8sU98KwimrXFN9WJZV39LILAOGKsxHRvbWS43H4/edit?usp=sharing
            {title:'GitHub', link:'https://tinyurl.com/2338GitHub'}, //https://docs.google.com/presentation/d/1jEJXgF9yde0Pql1Y3JLTpYBlS97l6L2KFpRcQp-rx2k/edit?usp=sharing
            {title:'Electrical and Pneumatic', link: 'https://tinyurl.com/2338ElectricalPneumatics'}, //https://docs.google.com/presentation/d/1x96gFhPWDvMWr5J5pqoGCzfVo92FctSnWkIrQmdEDYw/edit?usp=sharing
            {title:'CNC and 3D Printing', link: 'https://tinyurl.com/2338CncAnd3Dprint'}, //https://docs.google.com/presentation/d/1Cv7Ap5B4SgIoHz9h0dALMNkhZ550HTuLW1ys1SMD-LQ/edit?usp=sharing
            {title: 'Mechanical', link: 'https://tinyurl.com/2338Mechanical'}, //https://docs.google.com/presentation/d/1GzQEJDRBCvkgA3xZ6xhBBtawRmBGkCCD3_DMwpfYIDo/edit?usp=sharing
            {title: 'CAD', link: 'https://tinyurl.com/2338CadTrain'}, //https://docs.google.com/presentation/d/1HFqfQEvqVkQ5cjvVXXWbh_bm24Vt3cP2IqLf0Le6Ggw/edit?usp=sharing
            {title: "Leading Forward Team 2338", link: "https://tinyurl.com/2338Leader"}, //https://docs.google.com/presentation/d/1JAXmAvkKAljW9zw3gDu0LKPWYtQqo8bnemvJ7dXqgMI/edit#slide=id.g100f4491493_0_97
            {title: "2338 University: Intro to Leadership", link: 'https://tinyurl.com/2338ULeadership'}, //https://docs.google.com/presentation/d/1JAXmAvkKAljW9zw3gDu0LKPWYtQqo8bnemvJ7dXqgMI/edit#slide=id.g100f4491493_0_97
            {title: "2338 University: Democratic Leadership", link: 'https://tinyurl.com/2338UDemocratic'}, //https://docs.google.com/presentation/d/12TKHMBIboVXqnxOpBvOODVZyZj4oXNvaDyWvgaeDOug/edit#slide=id.g100f4491493_0_97
            {title: "2338 University: Facilitate Leadership", link: 'https://tinyurl.com/2338UFacilitate'}, //https://docs.google.com/presentation/d/1gCTqMUu0bk4fDiDsZGNK-fAxUgsy2DrzC_SmQoOhAU4/edit#slide=id.p
            {title: "2338 University: Situational Leadership", link: "https://tinyurl.com/2338USituation"}, //https://docs.google.com/presentation/d/1M5MqbtEN3k8x1dHNIasrppiS2xUdumAYEVLNLqvvwrE/edit#slide=id.g2a5c6815aa9_0_355
            {title: "2338 University: Wrap Up", link: 'https://tinyurl.com/2338UWrap'}, //https://docs.google.com/presentation/d/1PhJr4OiD2SqDyL-zaZTd3zi5fpxvyJAR-QXO-TZZMGo/edit#slide=id.g2a853c45fc1_0_100
            {title: "Contact Representatives", link: 'https://tinyurl.com/2338Represent'} //https://docs.google.com/document/d/15nTv8GJJMAUV7l1lWpy2UOz-ZYezFKDm5isk6YLvJnE/edit?usp=sharing
        ];
    const training = trainingList.map((trainingList) =>
        <div className="training-list">
            <h3 className="title">{trainingList.title}</h3>
            <ul className="link-list">
                <li><a href={trainingList.link} className="link" target="_blank" rel="noopener noreferrer">{trainingList.link}</a></li>
            </ul>
        </div>
    );

    const gameManual = 
        [
            {
                title:'Crescendo',
                manualSheet: 'https://tinyurl.com/CrecendoGameManual' //https://firstfrc.blob.core.windows.net/frc2024/Manual/2024GameManual.pdf
            }
        ]

    const gameManualList = gameManual.map((gameManual) =>
        <div className="game-manual">
            <h3 className="title">{gameManual.title}</h3>
            <ul className="link-list">
                <li className="sub-title">
                    2024 Game Manual :
                    <a href="/" className="link">{gameManual.manualSheet}</a>
                </li>
            </ul>
        </div>
    );

    return (
        <section className="resources">
            <div className="content">
                <div className="left">
                    <div className="wrapper">
                        <h1>Resources</h1>
                    </div>
                </div>
            </div>
            <div className="border"></div>

            <div className="content2">
                <h2 className="title">Training Slides</h2>
                {training}
            </div>

            <div className="content2">
                <h2 className="title">Game Manual</h2>
                {gameManualList}
            </div>

            <div className="content2">
                <h2 className="title">STEM Kit Tutorials</h2>
                <YouTube videoId="Cw_YeJBZF5g" className="youtube" />
                <YouTube videoId="wOZ_epEZz6Y" className="youtube" />
            </div>
        </section>
    );
}

export default Resources;