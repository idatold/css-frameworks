// Function to initialize the hamburger menu
export function initHamburgerMenu() {
    const menu = document.getElementById('menu');
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
  
    if (menu && menuToggle && menuClose) {
      // Toggle menu open
      menuToggle.addEventListener('click', () => {
        menu.classList.remove('hidden');
      });
  
      // Toggle menu close
      menuClose.addEventListener('click', () => {
        menu.classList.add('hidden');
      });
    } else {
      console.error('Menu elements not found in the DOM.');
    }
  }
  