const groceryForm = document.getElementById('grocery-form');
const groceryItem = document.getElementById('grocery-item');
const groceryList = document.getElementById('grocery-list');

let groceries = [];

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

function addGrocery(event) {
  event.preventDefault();
  let inputValue = groceryItem.value.trim();
  if (inputValue) {
    groceries.push(inputValue);
    renderGroceries();
    groceryForm.reset();
  }
}

groceryForm.addEventListener('submit', addGrocery);

renderGroceries();