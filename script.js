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
