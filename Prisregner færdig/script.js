// Select all buttons
const personButtons = document.querySelectorAll('.person-buttons button');
const dishButtons = document.querySelectorAll('.dish-buttons button');
const totalPrice = document.getElementById('total-price');
const priceWithoutShipping = document.getElementById('price-without-shipping');
const priceDescription = document.getElementById('price-description');
const priceOverview = document.querySelector('.total-container h2');

let selectedPersons = 2;
let selectedDishes = 3;
const basePrice = 100; // Base price for 2 persons and 3 dishes
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
