import React, { useEffect, useState } from "react";
import "./BooksCollection.css"

function SelectedBooks() {
  const [selectedBooks, setSelectedBooks] = useState([]);

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("selectedBooks")) || [];
    setSelectedBooks(savedBooks);
  }, []);

  return (
    <div className="selected-books-container">
      <h2>Cărțile selectate</h2>

      <table className="selected-books-table">
        <thead>
          <tr>
            <th>Copertă</th>
            <th>Titlu</th>
            <th>Autor</th>
          </tr>
        </thead>
        <tbody>
          {selectedBooks.map((book) => (
            <tr key={book.id}>
              <td>
                <img src={book.cover} alt={`Coperta cărții ${book.title}`} width="50" />
              </td>
              <td>{book.title}</td>
              <td>{book.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SelectedBooks;
