// ------------------------------- Måltidskasser start ---------------------------------

// Elementer og knapper
const personButtons = document.querySelectorAll('.person-buttons button');
// Knapper der repræsenterer antal personer
const dishButtons = document.querySelectorAll('.dish-buttons button');
// Knapper der repræsenterer antal retter
const totalPrice = document.getElementById('total-price');
// Visning af totalprisen inklusive fragtomkostninger
const priceWithoutShipping = document.getElementById('price-without-shipping');
// Visning af totalprisen uden fragtomkostninger
const priceDescription = document.getElementById('price-description');
// Visning af valgt antal personer og retter
const priceOverview = document.querySelector('.total-container h2');
// Overskrift for prisoversigten

// Initialværdier
let selectedPersons = 2;
// Standardværdi for valgt antal personer
let selectedDishes = 3;
// Standardværdi for valgt antal retter
const basePrice = 75;
// Grundpris pr. ret
const shippingCost = 50;
// Fragtomkostninger

// Funktioner til opdatering af priser og beskrivelser
function updateTotalPrice() {
  const total = (basePrice * selectedPersons * selectedDishes) + shippingCost; 
  totalPrice.textContent = total;
  updatePriceDescription();
}

function updatePriceWithoutShipping() {
  const price = basePrice * selectedPersons * selectedDishes;
  priceWithoutShipping.textContent = price;
}

function updatePriceDescription() {
  priceDescription.textContent = `${selectedPersons} personer og ${selectedDishes} retter`;
}

function updatePriceOverviewText() {
  priceOverview.textContent = `Pris oversigt`;
}

// Håndterer klik på knapper for antal personer
function handlePersonClick() {
  personButtons.forEach(button => {
    button.classList.remove('active');
  });
  this.classList.add('active');
  selectedPersons = parseInt(this.textContent);
  updateTotalPrice();
  updatePriceWithoutShipping(); 
}

// Håndterer klik på knapper for antal retter
function handleDishClick() {
  dishButtons.forEach(button => {
    button.classList.remove('active');
  });
  this.classList.add('active');
  selectedDishes = parseInt(this.textContent.split(' ')[0]); 
  updateTotalPrice();
  updatePriceWithoutShipping(); 
}

// Tilføjer event listeners til knapper for antal personer
personButtons.forEach(button => {
  button.addEventListener('click', handlePersonClick);
});

// Tilføjer event listeners til knapper for antal retter
dishButtons.forEach(button => {
  button.addEventListener('click', handleDishClick);
});

// Opdaterer prisen ved start
updateTotalPrice();
updatePriceDescription();
updatePriceOverviewText();
updatePriceWithoutShipping();

// ------------------------------- Måltidskasser slut ---------------------------------

// Filtrering af opskrifter
document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll(".filter-btn");
  // Knapper til at filtrere opskrifter
  const recipes = document.querySelectorAll(".recipe");
  // Opskrifter der kan filtreres
  const resetBtn = document.querySelector(".reset-btn");
  // Knappen til at nulstille filtre
  const selectedFilters = document.querySelector(".selected-filters");
  // Visning af aktive filtre
  let activeFilters = [];
  // Gemmer aktive filtre

  // Event listeners til filtreringsknapper
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      if (activeFilters.includes(filter)) {
        activeFilters = activeFilters.filter((item) => item !== filter);
        btn.classList.remove("active");
      } else {
        activeFilters.push(filter);
        btn.classList.add("active");
      }

      filterRecipes();
      updateSelectedFilters();
    });
  });

  // Event listener til nulstilling af filtre
  resetBtn.addEventListener("click", () => {
    filterBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    activeFilters = [];
    filterRecipes();
    updateSelectedFilters();
  });

  // Filtrer opskrifter baseret på aktive filtre
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

  // Opdater visningen af aktive filtre
  function updateSelectedFilters() {
    selectedFilters.innerHTML = "";
    activeFilters.forEach((filter) => {
      const icon = getIconByFilter(filter);
      const filterTag = `<span class="selected-filter">${icon} ${filter}</span>`;
      selectedFilters.insertAdjacentHTML("beforeend", filterTag);
    });
  }

  // Returnerer ikon baseret på filter
  function getIconByFilter(filter) {
    switch (filter) {
      case "Vegansk":
        return `<img src="Iconer/vegan-icon.png" alt="Vegansk">`;
      case "Spicy":
        return `<img src="Iconer/spicy-icon.png" alt="Spicy">`;
      case "Fisk":
        return `<img src="Iconer/fisk-icon.png" alt="Fisk">`;
      case "Hurtigt":
        return `<img src="Iconer/hurtig-icon.png" alt="Hurtigt">`;
      case "Fjerkræ":
        return `<img src="Iconer/kylling-icon.png" alt="Fjerkræ">`;
      case "Kød":
        return `<img src="Iconer/kød-icon.png" alt="Kød">`;
      case "Gris":
        return `<img src="Iconer/gris-icon.png" alt="Gris">`;
      case "Populære":
        return `<img src="Iconer/like-icon.png" alt="Populære">`;
      default:
        return "";
    }
  }
});
