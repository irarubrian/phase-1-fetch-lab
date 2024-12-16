

// index.js

// Function to fetch books from the API
function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())  // Parse the JSON data from the response
    .then(data => renderBooks(data))  // Pass the parsed JSON data to renderBooks()
    .catch(error => console.error('Error fetching books:', error));
}

// Function to render the book titles into the DOM
function renderBooks(books) {
  const bookList = document.getElementById('book-list'); // Get the UL element to display the books

  if (!bookList) {
    console.error("Book list element not found");
    return;
  }

  // Clear any existing list items before rendering new ones
  bookList.innerHTML = '';

  // Loop through each book in the JSON array and create a list item for each one
  books.forEach(book => {
    const li = document.createElement('li');  // Create a new list item
    li.textContent = book.name;  // Set the text content to the book title
    bookList.appendChild(li);  // Append the list item to the book list
  });
}

// Fetch the books when the page is loaded
fetchBooks();

// Export the functions for testing (if needed)
module.exports = { fetchBooks, renderBooks };




