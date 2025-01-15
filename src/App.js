import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Books from './components/Books/Books';
import Nav from './components/Nav/Nav';
import SelectedBooks from './components/BooksCollection/BooksCollection';
import Footer from './components/Footer/Footer';  
function App() {
  return (
    <div className="app-container">
      <Router>
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/books" element={<Books />} />
            <Route path="/selectedBooks" element={<SelectedBooks />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
