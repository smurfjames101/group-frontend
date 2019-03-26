import React from 'react';
import 'react-timelines/lib/css/style.css';
import Timeline from 'react-timelines';
class EventTimeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
            <Timeline
             now = {new Date().getFullYear()}
             scale ={{zoom: 2}}
            />
            </div>
        )
    }
}
export default EventTimeline;