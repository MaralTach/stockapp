import { useEffect, useState } from "react";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ProductTable from "../components/ProductTable";
import ProductModal from "../components/ProductModal";

const Products = () => {
  // const {getFirms,getSales} = useStockRequest()

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const initialState = {categoryId: "", brandId:"", name:""}

  const [info, setInfo] = useState(initialState);
  const handleClose = () => {
    setOpen(false);
    setInfo(initialState);
  };

  const { getStock } = useStockRequest();

  const { products } = useSelector((state) => state.stock);

  useEffect(() => {
    getStock("products");
    getStock("categories");
    getStock("brands");
  }, []);

  return (
    <div>
      <Typography
        variant="h4"
        color={"primary"}
        component="div"
        sx={{ flexGrow: 1 }}
      >
        Products
      </Typography>

      <Button
        onClick={handleOpen}
        color="inherit"
        variant="contained"
        sx={{
          m: 2,
          backgroundColor: "blueviolet",
          color: "white",
          "&:hover": {
            backgroundColor: "rebeccapurple",
            color: "white",
          },
        }}
      >
        New Product
      </Button>
      <ProductModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />


      <ProductTable/>

    </div>
  );
};

export default Products;
