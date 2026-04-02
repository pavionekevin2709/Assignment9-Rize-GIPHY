// script.js

// ==================== PUT YOUR REAL GIPHY API KEY HERE ====================
const API_KEY = "CIkOeX9j6oemV31ZrBWmthXDXLcraZH8";

// Base endpoint
const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=CIkOeX9j6oemV31ZrBWmthXDXLcraZH8&q=dinossaur&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

// DOM Elements
const gifContainer = document.querySelector('#gif-container');
const fetchButton = document.querySelector('#fetch-gif-btn');
const searchInput = document.querySelector('#search-input');

// Fetch and display GIFs
async function fetchGifs(searchTerm = 'cat') {
    try {
        gifContainer.innerHTML = '<p class="text-center col-12">Loading awesome GIFs...</p>';

        const url = `${BASE_URL}&q=${encodeURIComponent(searchTerm)}`;

        const response = await fetch(url);
        const data = await response.json();

        gifContainer.innerHTML = '';

        if (!data.data || data.data.length === 0) {
            gifContainer.innerHTML = '<p class="text-center col-12">No GIFs found. Try a different search!</p>';
            return;
        }

        data.data.forEach(gif => {
            const gifUrl = gif.images.original.url;

            gifContainer.innerHTML += `
                <div class="col-3 mb-4">
                    <img src="${gifUrl}" 
                         class="img-fluid rounded shadow-sm" 
                         alt="Giphy GIF">
                </div>
            `;
        });

    } catch (error) {
        console.error('Error:', error);
        gifContainer.innerHTML = `
            <p class="text-center col-12 text-danger">
                Failed to load GIFs.<br>
                Please check your API key and try again.
            </p>`;
    }
}

// Button click handler
fetchButton.addEventListener('click', () => {
    const term = searchInput.value.trim() || 'funny';
    fetchGifs(term);
});

// Allow pressing Enter in search box
if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            fetchButton.click();
        }
    });
}

// Load default GIFs when page opens
window.addEventListener('load', () => {
    fetchGifs('dinosaur');
});