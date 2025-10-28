import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box } from "@mui/material";

const AddBookForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    price: "",
    stock: "",
    publishedYear: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/books", form);
    onAdd();
    setForm({ title: "", author: "", genre: "", price: "", stock: "", publishedYear: "" });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3, display: "flex", gap: 1 }}>
      <TextField label="Title" name="title" value={form.title} onChange={handleChange} required />
      <TextField label="Author" name="author" value={form.author} onChange={handleChange} required />
      <TextField label="Genre" name="genre" value={form.genre} onChange={handleChange} required />
      <TextField label="Price" name="price" type="number" value={form.price} onChange={handleChange} required />
      <Button type="submit" variant="contained">Add</Button>
    </Box>
  );
};

export default AddBookForm;
