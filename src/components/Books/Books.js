import React, { useState, useEffect } from "react";
import "./Books.css";

function Books() {
  const [books, setBooks] = useState([]); 
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("selectedBooks")) || [];
    setSelectedBooks(savedBooks);
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedBooks", JSON.stringify(selectedBooks));
  }, [selectedBooks]);

  const fetchBooks = async (query) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
      const data = await response.json();

      const formattedBooks = data.docs.map((book) => ({
        id: book.key, 
        title: book.title,
        author: book.author_name ? book.author_name.join(", ") : "Autor necunoscut",
        cover: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
          : "https://via.placeholder.com/150?text=Fără+imagine",
      }));
      setBooks(formattedBooks);
    } catch (error) {
      console.error("Eroare la preluarea cărților:", error);
    }
  };

  const handleSelectBook = (book) => {
    if (!selectedBooks.some((b) => b.id === book.id)) {
      setSelectedBooks([...selectedBooks, book]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      fetchBooks(searchTerm);
    }
  };

  return (
    <div className="books-container">
      <h2>Lista Cărților</h2>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Caută cărți"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Caută</button>
      </form>

      <div className="books-list">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.cover} alt={`Coperta cărții ${book.title}`} className="book-cover" />
            <div className="book-info">
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <button onClick={() => handleSelectBook(book)} className="add-button">
                Adaugă
              </button>
            </div>
          </div>
        ))}
      </div>

      <h3>Cărțile selectate:</h3>
      <ul className="selected-books">
        {selectedBooks.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
