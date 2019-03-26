
import React from 'react';
import FullCalendar from 'fullcalendar';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import $ from 'jquery';
class CalendarView extends React.Component {
	render() {
		return (
			<div style={{ zIndex: 1000, position: 'relative' }}>
				<p>Top Of Calendar</p>
				<div id="calendar"></div>
			</div>
		)
	}
	componentDidMount() {
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title'
			},
			plugins:['resourceTimelinePlugin'],
			defaultView: 'month',
			views: {timeline:{
				type:'timeGrid',
				duration: {days: 365},
				buttonText: 'year'
			}},
			editable: true
		})
	}
}
export default CalendarView;