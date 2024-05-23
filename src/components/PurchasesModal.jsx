import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import useStockRequest from "../services/useStockRequest";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PurchasesModal({ handleClose, open, info, setInfo }) {
  //   const [info, setInfo] = useState({
  //     name: "",
  //     phone: "",
  //     image: "",
  //     address: "",
  //   })

  const { getStock, postStock, putStock } = useStockRequest();
  const { firms, brands, products } = useSelector((state) => state.stock);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (info._id) {
      //? put isteginin
      putStock("purchases", info);
    } else {
      //? post  işlemi
      postStock("purchases", info);
    }

    //? modal ı kapıtıyoruz
    handleClose();
  };

  // useEffect(() => {
  //   getStock("firms");
  //   getStock("brands");
  //   getStock("products");
  // }, []);

 

  // const firm = info.firmId;
  // console.log("info", firm);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component={"form"}
            onSubmit={handleSubmit}
          >
            <FormControl>
              <InputLabel id="firm-select-label" variant="outlined">
                Firm
              </InputLabel>
              <Select
                labelId="firm-select-label"
                id="firm-select"
                name="firmId"
                value={info?.firmId?._id || info?.firmId}
                label="Firm"
                onChange={handleChange}
                required
              >
                <MenuItem onClick={() => navigate("/stock/firms")}>
                  Add New Firm
                </MenuItem>
                <hr />

                {firms.map((firm) => (
                  <MenuItem key={firm._id} value={firm._id}>
                    {firm.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel id="brand-select-label">Brand</InputLabel>
              <Select
          labelId="brand-select-label"
          label="Brand"
          id="brand-select"
          name="brandId"
          value={info?.brandId?._id || info?.brandId}
          onChange={handleChange}
          required
              >
                <MenuItem onClick={() => navigate("/stock/brands")}>
                  Add New Brand
                </MenuItem>
                <hr />
                {brands?.map((brand) => {
                  return (
                    <MenuItem key={brand._id} value={brand._id}>
                      {brand.name}
                    </MenuItem>
                  )
              })}
              </Select>
            </FormControl>

            <FormControl >
              <InputLabel variant="outlined" id="product-select-label">Product</InputLabel>
              <Select
                labelId="product-select-label"
                id="product-select-label"
                value={info?.productId?._id || info?.productId}
                name="productId"
                label="Product"
                onChange={handleChange}
                required
              >
                 <MenuItem onClick={() => navigate("/stock/products")}>
                  Add New Product
                </MenuItem>
                <hr />
                {products?.map((product) => {
                  return (
                    <MenuItem key={product._id} value={product._id}>
                      {product.name}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>

            <TextField
               label="Quantity"
               id="quantity"
               name="quantity"
               type="number"
               variant="outlined"
               InputProps={{ inputProps: { min: 0 } }}
               value={info?.quantity}
               onChange={handleChange}
               required
            />

            <TextField
             label="Price"
             id="price"
             type="number"
             variant="outlined"
             name="price"
             InputProps={{ inputProps: { min: 0 } }}
             value={info?.price}
             onChange={handleChange}
             required
            />
            <Button
              variant="contained"
              type="submit"
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
              {info?._id ? "UPDATE PURCHASES" : "Add New Purchase"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
