import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../styles/globalStyles";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function FirmModal({ open, handleClose }) {
  const [info, setInfo] = useState({
    name: " ",
    phone: "",
    address: "",
    image: "",
  });

    const handleChange = (e) => {
        // const {name,value} = e.target;
        // setInfo({ ...info,[name]:value});
        setInfo({ ...info, [e.target.name]: e.target.value });

    }
    console.log(info)
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="outlined"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
            />
            <TextField
              label="Phone"
              name="phone"
              id="phone"
              type="tel"
              variant="outlined"
              value={info.phone}
              onChange={handleChange}
            />
            <TextField
              label="Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info.address}
              onChange={handleChange}
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" size="large">
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
