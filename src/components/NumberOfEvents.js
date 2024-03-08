import React from 'react';

class NumberOfEvents extends React.Component {
    state = {
        eventsNumber: 32,
    };

    handleInputChanged = (event) => {
        const value = parseInt(event.target.value);
        this.setState({ eventsNumber: value });
        console.log('Current number of events:', value);
        this.props.setCurrentNOE(value); // Add this line to update the parent component's state
    };



    render() {
        return (
            <div className="numberOfEvents" id="number-of-events" >
                <label htmlFor="numberOfEventsInput">Number of events:</label>
                <input
                    type="number"
                    id="numberOfEventsInput"
                    name="numberOfEvents"
                    defaultValue={this.state.eventsNumber}
                    min={1}
                    max={100}
                    onChange={this.handleInputChanged}
                />
            </div>
        );
    }
}

export default NumberOfEvents;
