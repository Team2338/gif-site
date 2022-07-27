import './calendar.scss';
import { useState } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment';


function MyCalendar() {
    const [value, onChange] = useState(new Date());
    const localizer = momentLocalizer(moment);
    const myEventsList = [
        {

        }
    ]

    return (
        <div className="MyCalendar" id="calendar">
            <div className="left">
                <h1 className='text-center'>Upcoming<br />Event<br />Calendar</h1>
            </div>
            <div className="container">
                <Calendar
                    localizer={localizer}
                    className="tCal"
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                />
            </div>
        </div>
    );
}

export default MyCalendar;