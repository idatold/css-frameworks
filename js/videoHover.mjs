export function initializeVideoControls(videoId) {
    const video = document.getElementById(videoId);
  
    if (!video) {
      console.error(`Video element with id "${videoId}" not found.`);
      return;
    }
  
    // Play the video once when hovered
    video.addEventListener("mouseover", () => {
      if (video.paused) {
        video.play();
      }
    });
  
    // Stop the video after it plays once
    video.addEventListener("ended", () => {
      video.pause();
    });
  }
  