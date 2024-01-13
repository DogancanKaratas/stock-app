import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/FirmModal";
import BrandModal from "../components/BrandModal";
import BrandCard from "../components/BrandCard";

const Brands = () => {
  // const { getFirms, getSales } = useStockCalls()
  const { getBrand } = useStockCalls();
  const { brands } = useSelector((state) => state.stock);

  const [info, setInfo] = useState({
    name: "",
    image: "",
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setInfo({ name: "", image: "" })
  }


  useEffect(() => {
    
    getBrand("brands");
  }, []);
 
  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firms
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Brand
      </Button>

      <BrandModal open={open} handleClose={handleClose} info={info} setInfo={setInfo} />
      <Grid container gap={2} mt={3} justifyContent={"center"}>
        {brands?.map((brand) => (
          <Grid item key={brand._id}>
            <BrandCard brand={brand} handleOpen={handleOpen} setInfo={setInfo}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Brands;
