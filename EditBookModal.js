import React, { useState } from "react";
import axios from "axios";
import { Modal, Box, TextField, Button } from "@mui/material";

const EditBookModal = ({ book, onClose, onUpdate }) => {
  const [form, setForm] = useState(book);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = async () => {
    await axios.put(`http://localhost:5000/api/books/${book._id}`, form);
    onUpdate();
    onClose();
  };

  return (
    <Modal open={true} onClose={onClose}>
      <Box className="modal-box">
        <h3>Edit Book</h3>
        {["title", "author", "genre", "price", "stock", "publishedYear"].map((field) => (
          <TextField
            key={field}
            label={field}
            name={field}
            value={form[field]}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
        ))}
        <Button variant="contained" onClick={handleSave}>Save</Button>
      </Box>
    </Modal>
  );
};

export default EditBookModal;
