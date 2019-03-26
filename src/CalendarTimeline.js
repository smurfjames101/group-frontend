import Timeline from 'react-calendar-timeline'
import React from 'react';

import moment from 'moment';
import './Timeline.css';

const groups = [
{ id: 0, title: 'The Heart' },
    { id: 1, title: 'Apt 908' },
    { id: 30, title: 'Room 1' },
    { id: 31, title: 'Room 2' },
    { id: 32, title: 'Room 3' },
    { id: 2, title: 'Apt 1001' },
    { id: 33, title: 'Room 1' },
    { id: 34, title: 'Room 2' },
    { id: 3, title: 'Apt 1008' },
    { id: 35, title: 'Room 1' },
    { id: 36, title: 'Room 2' },
    { id: 37, title: 'Room 3' },
    { id: 4, title: 'Apt 1101' },
    { id: 38, title: 'Room 1' },
    { id: 39, title: 'Room 2' },
    { id: 5, title: 'Apt 1108' },
    { id: 40, title: 'Room 1' },
    { id: 41, title: 'Room 2' },
    { id: 42, title: 'Room 3' },
    { id: 6, title: 'Apt 1301' },
    { id: 45, title: 'Room 1' },
    { id: 46, title: 'Room 2' },
    { id: 7, title: 'Apt 1501' },
    { id: 47, title: 'Room 1' },
    { id: 48, title: 'Room 2' },
    { id: 8, title: 'Apt 1701' },
    { id: 49, title: 'Room 1' },
    { id: 50, title: 'Room 2' },
    { id: 9, title: 'Apt 1801' },
    { id: 51, title: 'Room 1' },
    { id: 52, title: 'Room 2' },
    { id: 10, title: 'Apt 2002' },
    { id: 53, title: 'Room 1' },
    { id: 54, title: 'Room 2' },
    { id: 11, title: 'Apt 2302' },
    { id: 55, title: 'Room 1' },
    { id: 56, title: 'Room 2' },
    { id: 12, title: 'Number One'},
    { id: 13, title: 'Apt 103' },
    { id: 57, title: 'Room 1' },
    { id: 58, title: 'Room 2' },
    { id: 14, title: 'Apt 105' },
    { id: 59, title: 'Room 1' },
    { id: 60, title: 'Room 2' },
    { id: 15, title: 'Apt 301' },
    { id: 61, title: 'Room 1' },
    { id: 62, title: 'Room 2' },
    { id: 16, title: 'Apt 401' },
    { id: 63, title: 'Room 1' },
    { id: 64, title: 'Room 2' },
    { id: 17, title: 'Apt 603' },
    { id: 65, title: 'Room 1' },
    { id: 66, title: 'Room 2' },
    { id: 18, title: 'Apt 703' },
    { id: 67, title: 'Room 1' },
    { id: 68, title: 'Room 2' },
    { id: 19, title: 'Apt 801' },
    { id: 69, title: 'Room 1' },
    { id: 70, title: 'Room 2' },
    { id: 20, title: 'Apt 1005' },
    { id: 71, title: 'Room 1' },
    { id: 72, title: 'Room 2' },
    { id: 21, title: 'Apt 1108' },
    { id: 73, title: 'Room 1' },
    { id: 74, title: 'Room 2' },
    { id: 22, title: 'Apt 1205' },
    { id: 75, title: 'Room 1' },
    { id: 76, title: 'Room 2' },
    { id: 23, title: 'Apt 1301'},
    { id: 77, title: 'Room 1' },
    { id: 78, title: 'Room 2' },
    { id: 24, title: 'Apt 1409' },
    { id: 79, title: 'Room 1' },
    { id: 80, title: 'Room 2' },
    { id: 25, title: 'Apt 1601' },
    { id: 81, title: 'Room 1' },
    { id: 82, title: 'Room 2' },
    { id: 26, title: 'Apt 1708' },
    { id: 83, title: 'Room 1' },
    { id: 84, title: 'Room 2' },
    { id: 27, title: 'Apt 1901' },
    { id: 85, title: 'Room 1' },
    { id: 86, title: 'Room 2' },
    { id: 28, title: 'Apt 1903' },
    { id: 87, title: 'Room 1' },
    { id: 88, title: 'Room 2' },
    { id: 29, title: 'Apt 2202' },
    { id: 89, title: 'Room 1' },
    { id: 90, title: 'Room 2' }
]

const items = [
    {
        id: 1,
        group: 30,
        title: 'item 1',
        start_time: moment().add(-12, 'day'),
        end_time: moment().add(0, 'day') 
    },
]
class CalendarTimeline extends React.Component {
    render() {
        return (<div>   
    <Timeline
    sidebarWidth={100}
                sidebarContent={<div>Above The Left</div>}
                groups={groups}
                items ={items}
                defaultTimeStart={moment().add(-12, 'day')}
                defaultTimeEnd={moment().add(12, 'day')}
            />
            
        </div>
        )
    }
}
export default CalendarTimeline;