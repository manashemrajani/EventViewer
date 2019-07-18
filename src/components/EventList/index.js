import React from 'react';
import EventList from "./component.js"

class EventListContainer extends React.Component {
    
    // get data from backend
    state = {
        data: ["Events Type 1","Events Type 2","Events Type 3","Events Type 4","Events Type 5","Events Type 6","Events Type 7","Events Type 8","Events Type 9","Events Type 10","Events Type 11","Events Type 12"]
    };

    render(){
        return <EventList {...this.state}/>
    }
}

export default EventListContainer;
