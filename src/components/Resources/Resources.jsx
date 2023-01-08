import './resources.scss';

function Resources(props) {

    const trainingList =
        [
            {title:'Programming', link:'https:google.com'},
        ];
    const training = trainingList.map((trainingList) =>
        <div className="training-list">
            <h3 className="title">{trainingList.title}</h3>
            <ul className="link-list">
                <li><a href="/" className="link">{trainingList.link}</a></li>
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