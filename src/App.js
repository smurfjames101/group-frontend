import React from 'react';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
import CalendarView from './CalendarView.js';
class App extends React.Component {
  render() {
    return (
      <div id="example-component">
  
        <CalendarView/>
      </div>
    );
  }
}
export default App;