import React from 'react';

class NumberOfEvents extends React.Component {
    state = {
        eventsNumber: 32,
    };

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ eventsNumber: value });
    };

    render() {
        return (
            <div className="numberOfEvents">
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
