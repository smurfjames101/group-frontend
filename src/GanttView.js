import Gantt from './react_gantt';
import React from 'react';
class GanttView extends React.Component {
  constructor(props){
    super(props);  
  }  
  render() {
    return (
    <div>
      <Gantt {...{
        start: new Date(1970, 0, 1),
        stop: new Date(),
        data: [{
          "name": "Sprint 0",
          "desc": "Analysis",
          "values": [{
            "from": 1320192000000,
            "to": 1322401600000,
            "label": "Requirement Gathering",
            "customClass": "ganttRed"
          }]
        }]
      }}
      />

    </div>
    )
  }
}
export default GanttView;