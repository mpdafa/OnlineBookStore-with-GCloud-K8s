// Get references to relevant HTML elements
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const bookListSection = document.getElementById("bookList");

// Function to filter and display books based on search keyword
function searchBooks(keyword) {
  const books = bookListSection.getElementsByClassName("book-card");
  for (const book of books) {
    const title = book.querySelector("h2").textContent.toLowerCase();
    if (title.includes(keyword.toLowerCase())) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  }
}

// Event listener for search button click
searchButton.addEventListener("click", () => {
  const keyword = searchInput.value;
  searchBooks(keyword);
});

// Event listener for clearing search
searchInput.addEventListener("input", () => {
  if (searchInput.value === "") {
    const books = bookListSection.getElementsByClassName("book-card");
    for (const book of books) {
      book.style.display = "block";
    }
  }
});
