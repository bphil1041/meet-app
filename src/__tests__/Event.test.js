import { render } from '@testing-library/react';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';

describe('<Event /> component', () => {
    let eventComponent;
    let allEvents;

    beforeEach(async () => {
        allEvents = await getEvents();
        eventComponent = render(<Event event={allEvents[0]} />);
    });

    test('shows events titles', () => {
        expect(eventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
    });

    test('render event location', () => {
        expect(eventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    });

    test('renders event details button with the title (show details)', () => {
        expect(eventComponent.queryByText('show details')).toBeInTheDocument();
    });

    test('event details hidden by default', () => {
        expect(eventComponent.container.querySelector('.details')).not.toBeInTheDocument();
    });

    test('shows details section when the user clicks on (show details) button', async () => {
        await userEvent.click(eventComponent.queryByText('show details'));

        expect(eventComponent.container.querySelector('.details')).toBeInTheDocument();
        expect(eventComponent.queryByText('hide details')).toBeInTheDocument();
        expect(eventComponent.queryByText('show details')).not.toBeInTheDocument();
    });

    test('hide details section when the user clicks on (hide details) button', async () => {
        await userEvent.click(eventComponent.queryByText('show details'));
        expect(eventComponent.container.querySelector('.details')).toBeInTheDocument();
        expect(eventComponent.queryByText('hide details')).toBeInTheDocument();
        expect(eventComponent.queryByText('show details')).not.toBeInTheDocument();

        await userEvent.click(eventComponent.queryByText('hide details'));
        expect(eventComponent.container.querySelector('.details')).not.toBeInTheDocument();
        expect(eventComponent.queryByText('hide details')).not.toBeInTheDocument();
        expect(eventComponent.queryByText('show details')).toBeInTheDocument();
    });
});


