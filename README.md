### Overview

This project is a tracker of COVID-19 cases on a state-by-state level (heavily based on the example [here](https://leafletjs.com/examples/choropleth/)).  Users are presented with a color-coded map based on the number of cases that each state has reported today.  Hovering over a state will show the exact number of cases that have been reported so far.

However, this doesn't actually give a great picture of what the pandemic is like in the US. Case count and death count don't always correlate well, and data often isn't reported until late in the day so an accurate picture of the day isn't really available until nighttime.  We also don't get any idea how the data is trending over time, or a picture of the US as a whole. We're asking you to change that.

### Features

We would like you to add in the following features to improve this tracker.

- Users can populate the map with either yesterday's data or today's data.
- When not hovering over a state, users see the total numbers for the country.
- Users can choose to view either case numbers or death numbers.  If viewing death numbers, the breakpoints for the legend should be as follows: 0, 1, 5, 10, 25, 50, 100, 250.  This will result in an equal number of categories for cases and deaths.
- Users can view a graph showing the number of cases/deaths (depending on what's selected) for the region (state or country) from March 1st onward.  If a particular state doesn't have data available until after March 1st, simply show from the start date onward instead.
- Users can show/hide this graph as desired.

### Guidelines

- All of the data should be retrieved using the API available [here](https://corona.lmao.ninja/docs/#/).  This is a public API without usage restrictions.
- You are free to make any changes you like to the pre-existing code.
- You are also free to add in additional packages as needed; we recommend using [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2) for the graphing functionality.
- The UI design for this project is up to you, but we encourage you to focus primarily on implementing the above features in an easy-to-use manner than small design details. CSS changes are permitted but not necessary, especially with the utilization of the component library already being used in the project.
- We will be reviewing your code, so an efficient, clean, and easy-to-understand implementation is important.
- In the interest of respecting your time, we want to emphasize that we don't want you spending large amounts of time on small improvements that are outside the scope of this project; we'd rather discuss any potential improvements in the interview session instead.
- Please reach out to the email provided to you if you have any questions.
