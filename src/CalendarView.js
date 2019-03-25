
import React from 'react';
import FullCalendar from 'fullcalendar';
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
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			editable: true,
			droppable: true, // this allows things to be dropped onto the calendar
			drop: function () {
				// is the "remove after drop" checkbox checked?
				if ($('#drop-remove').is(':checked')) {
					// if so, remove the element from the "Draggable Events" list
					$(this).remove();
				}
			}
		})
	}
}
export default CalendarView;