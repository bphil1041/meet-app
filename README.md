# Features

* Feature 1: Filter Events By City
  * As a user, I want to be able to filter events by city so that I can find events in specific locations.

  * Scenario: Show upcoming events from all cities when user hasn’t searched for a city
    * Given the user hasn’t searched for any city
    * When the user views the list of upcoming events
    * Then the user should see events from all cities

  * Scenario: Show list of suggestions when user searches for a city
    * Given the user is typing in the city search bar
    * When the user enters at least one character
    * Then the user should see a list of suggested cities

  * Scenario: Select a city from the suggested list
    * Given the user is viewing the list of suggested cities
    * When the user selects a city from the list
    * Then the selected city should be displayed in the city search bar


* Feature 2: Show/Hide Event Details
  * As a user, I want to be able to expand and collapse event details so that I can view more or less information about an event.

  * Scenario: An event element is collapsed by default
    * Given the user is viewing a list of events
    * Then each event element should be collapsed by default

  * Scenario: User can expand an event to see details
    * Given the user is viewing a list of events
    * When the user clicks on an event element
    * Then the details of the event should be displayed

  * Scenario: User can collapse an event to hide details
    * Given the user has expanded an event to see details
    * When the user clicks on the event element again
    * Then the details of the event should be hidden

* Feature 3: Specify Number of Events
  * As a user, I want to be able to specify the number of events displayed so that I can control the amount of information shown.

  * Scenario: Show 32 events by default when user hasn’t specified a number
    * Given the user hasn’t specified the number of events to display
    * When the user views the list of events
    * Then the user should see 32 events

  * Scenario: User can change the number of events displayed
    * Given the user is viewing the list of events
    * When the user selects a different number of events to display
    * Then the user should see the selected number of events

* Feature 4: Use the App When Offline
  *As a user, I want to be able to use the app when I don't have an internet connection, so that I can still access information.

  * Scenario: Show cached data when there's no internet connection
    * Given the user has previously accessed the app and the data is cached
    * When the user opens the app without an internet connection
    * Then the app should display the cached data

  * Scenario: Show error when user changes search settings (city, number of events) without internet connection
    * Given the user has opened the app without an internet connection
    * When the user tries to change the search settings (city, number of events)
    * Then the app should display an error message

* Feature 5: Add an App Shortcut to the Home Screen
  * As a user, I want to be able to add a shortcut to the app on my device's home screen for quick access.

  * Scenario: User can install the meet app as a shortcut on their device home screen
    * Given the user is on the app's homepage
    * When the user accesses the browser's menu options
    * And selects "Add to Home Screen"
    * Then the app should be installed as a shortcut on the device's home screen

* Feature 6: Display Charts Visualizing Event Details
  * As a user, I want to see visual representations of event details so that I can quickly understand the data.

  * Scenario: Show a chart with the number of upcoming events in each city
    * Given the user is viewing the list of events
    * When the user selects the option to view a chart
    * Then the app should display a chart showing the number of upcoming events in each city

# User Stories

* Filter Events By City

  * As a user
  * I should be able to filter events by city
  * So that I can find events in specific locations.

* Show/Hide Event Details

  * As a user,
  * I should be able to show or hide event details
  * So that I can view more or less information about an event.

* Specify Number of Events

  * As a user,
  * I should be able to specify the number of events displayed
  * So that I can control the amount of information shown.

* Use the App When Offline

  * As a user,
  * I should be able to use the app when offline
  * So that I can still access information even without an internet connection.

* Add an App Shortcut to the Home Screen
  
  * As a user,
  * I should be able to add an app shortcut to my device's home screen
  * So that I can quickly access the app.

* Display Charts Visualizing Event Details

  * As a user,
  * I should be able to view charts visualizing event details
  * So that I can quickly understand the data.




