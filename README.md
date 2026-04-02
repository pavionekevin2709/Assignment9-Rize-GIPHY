# Giphy Fetcher

A simple web application that fetches and displays GIFs from the Giphy API using JavaScript's `fetch()` method.

## Features

- Fetches GIFs from the Giphy API when the button is clicked
- Displays results in a responsive Bootstrap grid
- Search functionality - users can search for any GIF using the input field
- Clean and modern UI with hover effects
- Loading state and basic error handling

## Technologies Used

- HTML5
- CSS3 (with Bootstrap 5)
- JavaScript (Async/Await + Fetch API)
- Giphy API

## How It Works

1. User enters a search term (or uses the default)
2. Clicking "Fetch GIFs" sends a request to the Giphy API
3. The app receives JSON data containing GIF URLs
4. GIFs are dynamically rendered on the page in a responsive grid

## Extra Credit Implemented

- Full search functionality using the input field
- Dynamic API URL using string interpolation
- Enter key support in the search box
- Default GIFs load when the page opens

## Setup Instructions

1. Clone the repository
2. Open `index.html` with Live Server in VS Code
3. Replace the API key in `script.js` with your own Giphy API key (if needed)
4. Type a search term and click "Fetch GIFs"

## Demo

*(You can add a screenshot or GIF of your working project here later)*

## Assignment Requirements Met

- Fetches data from Giphy API using `fetch()`
- Renders returned images dynamically on the page
- Clean, organized, and readable code
- Multiple descriptive Git commits
- Search functionality (Extra Credit)

---

Made as part of a web development assignment to practice working with external APIs and asynchronous JavaScript.
