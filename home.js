
// Create an empty array to store the shopping list items
const shoppingList = [];
// Get the form and div elements
const form = document.querySelector('form');
const listDiv = document.querySelector('#itemsList');
// Add an event listener to the form's submit event
form.addEventListener('submit', handleSubmitItem);
// Define the handleSubmit function
function handleSubmitItem(event) {
    event.preventDefault();
    const todo = event.target.input.value.trim();
    if (todo) {
        addTodoToList(todo);
        event.target.reset();
    }
}

// Define the addTodoToList function
function addTodoToList(todo) {
  // Create a new list item element
    const listItem = document.createElement('li');
    listItem.textContent = todo;
  // Create buttons for marking as purchased and deleting
    const purchasedBtn = document.createElement('button');
    purchasedBtn.textContent = 'Purchased';
    purchasedBtn.addEventListener('click', handlePurchased);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Clear';
    deleteBtn.addEventListener('click', handleDelete);
  // Add the buttons to the list item
    listItem.appendChild(purchasedBtn);
    listItem.appendChild(deleteBtn);
  // Add the list item to the list
    listDiv.appendChild(listItem);
    listDiv.className = "right"
  // Add the todo to the shopping list array
    shoppingList.push(todo);
    console.log(shoppingList);
}

// Define the handlePurchased function
function handlePurchased(event) {
    const listItem = event.target.parentNode;
    listItem.classList='buy';
}

// Define the handleDelete function
function handleDelete(event) {
    const listItem = event.target.parentNode;
    listItem.remove();
}
