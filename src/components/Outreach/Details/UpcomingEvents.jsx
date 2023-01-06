import '../outreach.scss';
import "../../../globals.scss";

function UpcomingEvents() {

    const title =
        [
            'Kick Off of 2023 reason',
            'Title2'
        ];
    const titleList = title.map((title) =>
        <h5 className="event-title">{title}</h5>
    );
    const date = ['12/02/2022', '1/1/2023'];
    const dateList = date.map((date) =>
        <h6 className="date">{date}</h6>
    );

    return(
        <section className="upcoming-events">
            <div className="row">
                <div className="column">
                    <h2 className="event-header">Upcoming Event at <span className="frc2338-title">Gear it Forward:</span></h2>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="events">
                        {titleList}
                    </div>
                </div>
                <div className="column">
                    <div className="events">
                        {dateList}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UpcomingEvents;