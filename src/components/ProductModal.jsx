import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../styles/globalStyles";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";

export default function ProductModal({ open, handleClose, info, setInfo }) {
  const { postStock } = useStockCalls();

  const { categories, brands } = useSelector((state) => state.stock);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postStock("products", info);
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
            onSubmit={handleSubmit}
          >
            <FormControl fullWidth>
              <InputLabel id="categoryId">Category</InputLabel>
              <Select
                labelId="categoryId"
                id="categoryId"
                name="categoryId"
                value={info.categoryId}
                label="Category"
                onChange={handleChange}
              >
                {categories.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="brandId">Brand</InputLabel>
              <Select
                labelId="brandId"
                id="brandId"
                name="brandId"
                value={info.brandId}
                label="Brand"
                onChange={handleChange}
              >
                {brands.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Product Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" size="large">
              Add Product
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
