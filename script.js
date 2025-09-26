document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const gameLinks = document.querySelectorAll(".game-link");
  const darkToggle = document.getElementById("darkModeToggle");
  const favoritesSection = document.getElementById("favorites-section");
  const favoritesList = document.getElementById("favorites-list");

  // Load favorites from localStorage
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Add star icons to each game
  gameLinks.forEach(link => {
    const star = document.createElement("span");
    star.classList.add("favorite-star");
    star.innerHTML = "⭐";

    const gameName = link.textContent.trim();

    if (favorites.includes(gameName)) {
      star.classList.add("active");
    }

    star.addEventListener("click", e => {
      e.preventDefault();
      toggleFavorite(gameName, star, link.href);
    });

    link.appendChild(star);
  });

  // Search filter
  searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    gameLinks.forEach(link => {
      link.style.display = link.textContent.toLowerCase().includes(term) ? "" : "none";
    });
  });

  // Dark mode toggle
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", document.body.classList.contains("dark"));
  });

  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
  }

  // Toggle favorites
  function toggleFavorite(name, star) {
    if (favorites.includes(name)) {
      favorites = favorites.filter(item => item !== name);
      star.classList.remove("active");
    } else {
      favorites.push(name);
      star.classList.add("active");
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    renderFavorites();
  }

  // Render favorites section
  function renderFavorites() {
    favoritesList.innerHTML = "";
    if (favorites.length === 0) {
      favoritesSection.classList.add("hidden");
      return;
    }

    favoritesSection.classList.remove("hidden");
    favorites.forEach(name => {
      const originalLink = [...gameLinks].find(l => l.textContent.trim() === name);
      if (originalLink) {
        const clone = originalLink.cloneNode(true);
        clone.querySelector(".favorite-star").remove();
        favoritesList.appendChild(clone);
      }
    });
  }

  renderFavorites();
});
