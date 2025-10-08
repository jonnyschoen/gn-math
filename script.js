// 🌙 Dark Mode Toggle
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggleBtn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// 🔍 Search Filter
const searchInput = document.getElementById("searchInput");
const gameLinks = document.querySelectorAll(".game-link");

searchInput.addEventListener("input", (e) => {
  const search = e.target.value.toLowerCase();
  gameLinks.forEach(link => {
    link.style.display = link.textContent.toLowerCase().includes(search) ? "" : "none";
  });
});

let scrollCount = 0;
let lastScrollTime = 0;

document.addEventListener('scroll', () => {
    const currentTime = new Date().getTime();
    if (currentTime - lastScrollTime < 100) { // If user scrolls fast
        scrollCount++;
        if (scrollCount > 10) { // After 10 quick scrolls
            glitchEffect();
            scrollCount = 0; // Reset
        }
    } else {
        scrollCount = 0; // Reset if the user stops
    }
    lastScrollTime = currentTime;
});

function glitchEffect() {
    const overlay = document.getElementById('glitch-overlay');
    const scanline = document.getElementById('scanline');
    
    overlay.style.display = 'block';
    scanline.style.opacity = 1;

    // Add static noise background
    document.body.style.background = `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAMAAADszGZ4AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqXqgAAABtQTFRF/v7+//7+////++Xl++++/v38/f39/+vr/+bn//f///m4+3sAAAAAIJREFUeJxjYmBiYGBhYGBgYGBgAAAKAAe9S8zQAAAAAElFTkSuQmCC)`
    document.body.style.animation = 'static-noise 0.2s infinite';

    setTimeout(() => {
        overlay.style.display = 'none';
        scanline.style.opacity = 0;
        document.body.style.background = '';
        document.body.style.animation = '';
    }, 1000); // Effect lasts for 1 second
}
