const groceryForm = document.getElementById('grocery-form');
const groceryItem = document.getElementById('grocery-item');
const groceryList = document.getElementById('grocery-list');

// Set up empty grocery list array
let groceries = [];

// Function to render grocery list on the page
function renderGroceries() {
  groceryList.innerHTML = '';
  for (let i = 0; i < groceries.length; i++) {
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    let label = document.createElement('label');
    label.textContent = groceries[i];
    li.appendChild(checkbox);
    li.appendChild(label);
    groceryList.appendChild(li);
  }
}

// Function to add grocery item to list
function addGrocery(event) {
  event.preventDefault();
  let inputValue = groceryItem.value.trim();
  if (inputValue) {
    groceries.push(inputValue);
    renderGroceries();
    groceryForm.reset();
  }
}

// Set up event listener for grocery item form submit
groceryForm.addEventListener('submit', addGrocery);

// Render initial grocery list
renderGroceries();