import React from "react";
import axios from "axios";
import { Modal, Box, Button } from "@mui/material";

const DeleteConfirm = ({ id, onClose, onDelete }) => {
  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/books/${id}`);
    onDelete();
    onClose();
  };

  return (
    <Modal open={true} onClose={onClose}>
      <Box className="modal-box">
        <h3>Are you sure you want to delete this book?</h3>
        <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>
        <Button variant="outlined" onClick={onClose}>Cancel</Button>
      </Box>
    </Modal>
  );
};

export default DeleteConfirm;
