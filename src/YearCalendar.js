import React from 'react';
import Calendar from 'rc-year-calendar';
const currentYear = new Date().getFullYear();
class YearCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [
                {
                    id: 0,
                    name: 'Google I/O',
                    location: 'San Francisco, CA',
                    startDate: new Date(currentYear, 3, 28),
                    endDate: new Date(currentYear, 3, 29)
                },
                {
                    id: 1,
                    name: 'overlap test',
                    location: 'in the quay',
                    startDate: new Date(2019, 4, 21),
                    endDate: new Date(2019, 4, 30)
                },
                {
                    id: 2,
                    name: 'Google I/O',
                    location: 'San Francisco, CA',
                    startDate: new Date(currentYear, 4, 28),
                    endDate: new Date(currentYear, 4, 29)
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <Calendar
                    style='background'
                    dataSource={this.state.dataSource}
                    alwaysHalfDays={true}
                />
            </div>
        )
    }
}
export default YearCalendar;