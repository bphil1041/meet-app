import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('Show 32 events by default when user hasn’t specified a number', ({ given, when, then }) => {
        let AppComponent;
        given('the user hasn’t specified the number of events to display', () => { });

        when('the user views the list of events', () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            expect(EventListDOM).toBeInTheDocument();
        });

        then('the user should see 32 events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });
    });

    test('User can change the number of events displayed', ({ given, when, then }) => {
        let AppComponent;
        given('the user is viewing the list of events', async () => {
            const user = userEvent.setup();
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
            const numberOfEventsInput = within(NumberOfEventsDOM).queryByRole('spinbutton');
            await user.type(numberOfEventsInput, '{backspace}{backspace}10');
        });

        when('the user selects a different number of events to display', () => {
        });

        then('the user should see the selected number of events', () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
            expect(allRenderedEventItems.length).toEqual(10);
        });
    });
});
