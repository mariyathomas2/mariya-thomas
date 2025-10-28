import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from "@mui/material";

const BookList = ({ books, onEdit, onDelete }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Title</TableCell>
        <TableCell>Author</TableCell>
        <TableCell>Genre</TableCell>
        <TableCell>Price</TableCell>
        <TableCell>Stock</TableCell>
        <TableCell>Year</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {books.map((book) => (
        <TableRow key={book._id}>
          <TableCell>{book.title}</TableCell>
          <TableCell>{book.author}</TableCell>
          <TableCell>{book.genre}</TableCell>
          <TableCell>${book.price}</TableCell>
          <TableCell>{book.stock}</TableCell>
          <TableCell>{book.publishedYear}</TableCell>
          <TableCell>
            <Button size="small" onClick={() => onEdit(book)}>Edit</Button>
            <Button size="small" color="error" onClick={() => onDelete(book._id)}>Delete</Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default BookList;
