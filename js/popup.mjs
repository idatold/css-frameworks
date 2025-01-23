export function initializePopup() {
    // Check if the current page is the feed page
    const currentPage = window.location.pathname;
    if (!currentPage.includes('feed')) {
      return; // Exit if not on the feed page
    }
  
    // Get references to the popup elements
    const popupOverlay = document.getElementById('popupOverlay');
    const openPopup = document.getElementById('openPopup');
    const closePopup = document.getElementById('closePopup');
  
    // Ensure all required elements exist
    if (!popupOverlay || !openPopup || !closePopup) {
      console.error('Popup elements not found');
      return;
    }
  
    // Add event listeners for opening and closing the popup
    openPopup.addEventListener('click', () => {
      popupOverlay.classList.remove('hidden');
    });
  
    closePopup.addEventListener('click', () => {
      popupOverlay.classList.add('hidden');
    });
  }
  