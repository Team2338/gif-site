import './resources.scss';

function Resources(props) {

    const trainingList =
        [
            {title:'Java', link:'https://docs.google.com/presentation/d/1lubf8sU98KwimrXFN9WJZV39LILAOGKsxHRvbWS43H4/edit?usp=sharing'},
            {title:'GitHub', link:'https://docs.google.com/presentation/d/1jEJXgF9yde0Pql1Y3JLTpYBlS97l6L2KFpRcQp-rx2k/edit?usp=sharing'},
            {title:'Electrical and Pneumatic', link: 'https://docs.google.com/presentation/d/1x96gFhPWDvMWr5J5pqoGCzfVo92FctSnWkIrQmdEDYw/edit?usp=sharing'},
            {title:'CNC and 3D Printing', link: 'https://docs.google.com/presentation/d/1Cv7Ap5B4SgIoHz9h0dALMNkhZ550HTuLW1ys1SMD-LQ/edit?usp=sharing'},
            {title: 'Mechanical', link: 'https://docs.google.com/presentation/d/1GzQEJDRBCvkgA3xZ6xhBBtawRmBGkCCD3_DMwpfYIDo/edit?usp=sharing'},
            {title: 'CAD', link: 'https://docs.google.com/presentation/d/1HFqfQEvqVkQ5cjvVXXWbh_bm24Vt3cP2IqLf0Le6Ggw/edit?usp=sharing'}
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
                title:'Charged Up',
                manualSheet:'https://firstfrc.blob.core.windows.net/frc2023/Manual/2023FRCGameManual.pdf'
            }
        ];

    const gameManualList = gameManual.map((gameManual) =>
        <div className="game-manual">
            <h3 className="title">{gameManual.title}</h3>
            <ul className="link-list">
                <li className="sub-title">
                    Game Manual :
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
        </section>
    );
}

export default Resources;