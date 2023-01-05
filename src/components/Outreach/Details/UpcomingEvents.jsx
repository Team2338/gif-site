import '../outreach.scss';
import "../../../globals.scss";

function UpcomingEvents() {
    return(
        <section className="upcoming-events">
            <div className="row">
                <div className="column">
                    <h2 className="event-header">Upcoming Event at <span className="frc2338-title">Gear it Forward:</span></h2>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <h5 className="event-title">Title</h5>
                </div>
                <div className="column">
                    <h6 className="date">Date</h6>
                </div>
            </div>
        </section>
    );
}

export default UpcomingEvents;