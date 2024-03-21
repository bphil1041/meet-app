import React from 'react';

class NumberOfEvents extends React.Component {
    state = {
        eventsNumber: 32,
    };

    handleInputChanged = (event) => {
        const value = parseInt(event.target.value);
        this.setState({ eventsNumber: value }, () => {
            console.log('Current number of events:', value);
            this.props.setCurrentNOE(value); // Update the parent component's state
            let infoText;
            if (isNaN(value) || value <= 0) {
                infoText = "Only positive numbers are allowed";
            } else {
                infoText = "";
            }
            this.props.setErrorAlert(infoText); // Update the error alert message
        });
    }


    render() {
        return (
            <div className="numberOfEvents" id="number-of-events">
                <label htmlFor="numberOfEventsInput">Number of events:</label>
                <input
                    type="number"
                    id="numberOfEventsInput"
                    name="numberOfEvents"
                    value={this.state.eventsNumber}
                    min={1}
                    max={100}
                    onChange={this.handleInputChanged}
                />
            </div>
        );
    }
}

export default NumberOfEvents;
