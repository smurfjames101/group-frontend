import React from 'react';
// import GanttView from './GanttView.js';
// import CalendarTimeline from './CalendarView.js';
import EventTimeline from './Timeline/EventTimeline.js';
class App extends React.Component {
  render() {
    return (
      <div id="example-component">
        {/* <GanttView/> */}
         {/* <CalendarTimeline/>  */}
           <EventTimeline/> 
          {/* <YearCalendar/> */}
        {/* <CalendarView/> */}
      </div>
    );
  }
}
export default App;