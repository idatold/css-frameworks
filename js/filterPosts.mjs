export function filterPosts() {
    const sortDropdown = document.querySelector('select'); // Keep the same dropdown selector
    const posts = document.querySelectorAll('.post'); // Target all posts within their cards
  
    // Ensure the dropdown exists before proceeding
    if (!sortDropdown || posts.length === 0) {
      console.log('filterPosts: Required elements not found, skipping initialization.');
      return; // Exit if the dropdown or posts are missing
    }
  
    // Event listener for dropdown change
    sortDropdown.addEventListener('change', (event) => {
      const selectedTag = event.target.value;
  
      posts.forEach((post) => {
        const postCard = post.closest('.bg-white'); // Select the entire post card
  
        // Show all posts if "all" is selected or filter by data-tag
        if (selectedTag === 'all' || post.dataset.tag.includes(selectedTag)) {
          postCard.style.display = 'block'; // Show the entire post card
        } else {
          postCard.style.display = 'none'; // Hide the entire post card
        }
      });
    });
  }
  