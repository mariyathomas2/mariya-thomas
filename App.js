import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';
import EditBookModal from './components/EditBookModal';
import DeleteConfirm from './components/DeleteConfirm';
import { Container, Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

function App() {
  const [books, setBooks] = useState([]);
  const [editBook, setEditBook] = useState(null);
  const [deleteBook, setDeleteBook] = useState(null);

  // Fetch all books from backend
  const fetchBooks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/books');
      setBooks(res.data);
    } catch (err) {
      toast.error('Failed to fetch books');
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <Container>
      <Typography
        variant="h4"
        style={{ marginTop: '20px', marginBottom: '20px', textAlign: 'center' }}
      >
        Book Inventory
      </Typography>

      {/* Form to Add New Book */}
      <AddBookForm fetchBooks={fetchBooks} />

      {/* Table to Display All Books */}
      <BookList
        books={books}
        setEditBook={setEditBook}
        setDeleteBook={setDeleteBook}
      />

      {/* Edit Book Modal */}
      {editBook && (
        <EditBookModal
          book={editBook}
          onClose={() => setEditBook(null)}
          fetchBooks={fetchBooks}
        />
      )}

      {/* Delete Confirmation Modal */}
      {deleteBook && (
        <DeleteConfirm
          book={deleteBook}
          onClose={() => setDeleteBook(null)}
          fetchBooks={fetchBooks}
        />
      )}

      {/* Toast notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </Container>
  );
}

export default App;
