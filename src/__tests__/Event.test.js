import { render, fireEvent } from '@testing-library/react';
import Event from '../components/Event';
import mockData from '../mock-data';

describe('<Event /> component', () => {
    const event = mockData[0]; // Directly access the event if 'items' is not present

    test('An event element is collapsed by default', () => {
        const { queryByText } = render(<Event event={event} />);
        expect(queryByText(event.description)).not.toBeInTheDocument();
    });

    test('User can expand an event to see details', () => {
        const { getByText, queryByText } = render(<Event event={event} />);
        const eventElement = getByText(event.summary);
        fireEvent.click(eventElement);
        expect(queryByText(event.description)).toBeInTheDocument();
    });

    test('User can collapse an event to hide details', () => {
        const { getByText, queryByText } = render(<Event event={event} />);
        const eventElement = getByText(event.summary);
        fireEvent.click(eventElement); // Expand event
        fireEvent.click(eventElement); // Collapse event
        expect(queryByText(event.description)).not.toBeInTheDocument();
    });
});
