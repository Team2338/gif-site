import './calendar.scss';
import { useState } from 'react';
import Calendar from 'react-calendar';

function MyCalendar() {
    const [value, onChange] = useState(new Date());

    return (
        <div className="Calendar" id="calendar">
            <Calendar onChange={onChange} value={value} />
        </div>
    );
}

export default MyCalendar;