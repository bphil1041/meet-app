Feature: Specify Number of Events

    Scenario: Show 32 events by default when user hasn’t specified a number
        Given the user hasn’t specified the number of events to display
        When the user views the list of events
        Then the user should see 32 events

    Scenario: User can change the number of events displayed
        Given the user is viewing the list of events
        When the user selects a different number of events to display
        Then the user should see the selected number of events
