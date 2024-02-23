// Select all buttons
const personButtons = document.querySelectorAll('.person-buttons button');
const dishButtons = document.querySelectorAll('.dish-buttons button');
const totalPrice = document.getElementById('total-price');
const priceWithoutShipping = document.getElementById('price-without-shipping');
const priceDescription = document.getElementById('price-description');
const priceOverview = document.querySelector('.total-container h2');

let selectedPersons = 2;
let selectedDishes = 3;
const basePrice = 75; // Base price for 2 persons and 3 dishes
const shippingCost = 50;

// Function to update total price
function updateTotalPrice() {
  const total = (basePrice * selectedPersons * selectedDishes) + shippingCost; // Adding fixed shipping cost
  totalPrice.textContent = total;
  updatePriceDescription();
}

// Function to update price without shipping
function updatePriceWithoutShipping() {
  const price = basePrice * selectedPersons * selectedDishes;
  priceWithoutShipping.textContent = price;
}

// Function to update price description
function updatePriceDescription() {
  priceDescription.textContent = `${selectedPersons} personer og ${selectedDishes} retter`;
}

// Function to update price overview text
function updatePriceOverviewText() {
  priceOverview.textContent = `Pris oversigt`;
}

// Function to handle click on person buttons
function handlePersonClick() {
  personButtons.forEach(button => {
    button.classList.remove('active');
  });
  this.classList.add('active');
  selectedPersons = parseInt(this.textContent);
  updateTotalPrice();
  updatePriceWithoutShipping(); // Opdaterer prisen uden fragt
}

// Function to handle click on dish buttons
function handleDishClick() {
  dishButtons.forEach(button => {
    button.classList.remove('active');
  });
  this.classList.add('active');
  selectedDishes = parseInt(this.textContent.split(' ')[0]); // Get the number of dishes from button text
  updateTotalPrice();
  updatePriceWithoutShipping(); // Opdaterer prisen uden fragt
}

// Event listeners for person buttons
personButtons.forEach(button => {
  button.addEventListener('click', handlePersonClick);
});

// Event listeners for dish buttons
dishButtons.forEach(button => {
  button.addEventListener('click', handleDishClick);
});

// Initialize total price and price overview text
updateTotalPrice();
updatePriceDescription();
updatePriceOverviewText();
updatePriceWithoutShipping(); // Opdaterer prisen uden fragt ved start

// Pris udregner færdig




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
      case "Vegansk":
        return `<img src="Iconer/vegan-icon.png" alt="Vegansk">`;
      case "Spicy":
        return `<img src="Iconer/spicy-icon.png" alt="Spicy">`;
      case "Fisk":
        return `<img src="Iconer/fisk-icon.png" alt="Fisk">`;
      case "Hurtigt":
        return `<img src="Iconer/hurtig-icon.png" alt="Hurtigt">`;
      case "Fjerkrae":
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
