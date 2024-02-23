document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const recipes = document.querySelectorAll(".recipe");
  const resetBtn = document.querySelector(".reset-btn");
  const selectedFilters = document.querySelector(".selected-filters");
  let activeFilters = [];

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      if (activeFilters.includes(filter)) {
        // Remove filter if already active
        activeFilters = activeFilters.filter((item) => item !== filter);
        btn.classList.remove("active");
      } else {
        // Add filter if not active
        activeFilters.push(filter);
        btn.classList.add("active");
      }

      filterRecipes();
      updateSelectedFilters();
    });
  });

  resetBtn.addEventListener("click", () => {
    filterBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    activeFilters = [];
    filterRecipes();
    updateSelectedFilters();
  });

  function filterRecipes() {
    recipes.forEach((recipe) => {
      const tags = recipe.getAttribute("data-tags").split(" ");
      const showRecipe = activeFilters.every((filter) => tags.includes(filter));

      if (showRecipe || activeFilters.length === 0) {
        recipe.style.display = "block";
      } else {
        recipe.style.display = "none";
      }
    });
  }

  function updateSelectedFilters() {
    selectedFilters.innerHTML = "";
    activeFilters.forEach((filter) => {
      const icon = getIconByFilter(filter);
      const filterTag = `<span class="selected-filter">${icon} ${filter}</span>`;
      selectedFilters.insertAdjacentHTML("beforeend", filterTag);
    });
  }

  function getIconByFilter(filter) {
    switch (filter) {
      case "vegansk":
        return `<img src="vegansk_icon.png" alt="Vegansk">`;
      case "spicy":
        return `<img src="spicy_icon.png" alt="Spicy">`;
      case "fisk":
        return `<img src="fisk_icon.png" alt="Fisk">`;
      case "hurtigt":
        return `<img src="hurtigt_icon.png" alt="Hurtigt">`;
      case "fjerkrae":
        return `<img src="fjerkrae_icon.png" alt="Fjerkræ">`;
      case "koed":
        return `<img src="koed_icon.png" alt="Kød">`;
      case "gris":
        return `<img src="gris_icon.png" alt="Gris">`;
      case "populaere":
        return `<img src="populaere_icon.png" alt="Populære">`;
      default:
        return "";
    }
  }
});
