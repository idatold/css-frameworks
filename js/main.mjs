import '../css/style.css';
// Initialize hovering video login and register
import { initializeVideoControls } from './videoHover.mjs';

// Check the current page URL or title to initialize the video hover function only for specific pages
const currentPage = window.location.pathname;

if (currentPage.endsWith('index.html') || currentPage.endsWith('register/index.html')) {
    initializeVideoControls('plantioVideo');
}

// Hamburger menu functionality
import { initHamburgerMenu } from './menu.mjs';
initHamburgerMenu();

// Initialize the filter functionality only for the feed/index page
import { filterPosts } from './filterPosts.mjs';
if (currentPage.includes('/feed/') || currentPage.endsWith('index.html')) {
    filterPosts();
}

// Initialize post interactions
import { initializePostInteractions } from "./postInteractions.mjs";
document.addEventListener("DOMContentLoaded", () => {
    initializePostInteractions();
});

// Redirect to the feed page on login button click
const loginButton = document.getElementById('loginButton');
if (loginButton) {
    loginButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent any default behavior
        window.location.href = '/feed/'; // Redirect to the feed page
    });
}
import { initializePopup } from './popup.mjs';

document.addEventListener('DOMContentLoaded', () => {
  initializePopup(); // Initialize the popup functionality only on the feed page
});
