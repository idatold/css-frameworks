export function initializePostInteractions() {
    const posts = document.querySelectorAll(".post");
  
    posts.forEach((post) => {
      const commentToggle = post.querySelector(".commentToggle");
      const commentSection = post.querySelector(".commentSection");
      const likeButton = post.querySelector(".likeButton");
  
      if (commentToggle && commentSection) {
        // Toggle comment section visibility
        commentToggle.addEventListener("click", () => {
          commentSection.classList.toggle("hidden");
        });
      }
  
      if (likeButton) {
        // Like button functionality
        likeButton.addEventListener("click", () => {
          const heartIcon = likeButton.querySelector("svg");
          const likeCount = likeButton.querySelector("span");
  
          if (heartIcon.classList.contains("text-green-500")) {
            heartIcon.classList.remove("text-green-500");
            heartIcon.classList.add("text-gray-500");
            likeCount.textContent =
              parseInt(likeCount.textContent) - 1 + " Likes"; // Decrease like count
          } else {
            heartIcon.classList.remove("text-gray-500");
            heartIcon.classList.add("text-green-500");
            likeCount.textContent =
              parseInt(likeCount.textContent) + 1 + " Likes"; // Increase like count
          }
        });
      }
    });
  }
  