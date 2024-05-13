import { useEffect, useState } from "react";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/FirmModal";

const Firms = () => {
  // const {getFirms,getSales} = useStockRequest()

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  const handleClose = () => {
    setOpen(false);
    setInfo({
      name: "",
      phone: "",
      address: "",
      image: "",
    })
  }



  const { getStock } = useStockRequest();

  const { firms } = useSelector((state) => state.stock);

  useEffect(() => {
    //  getFirms()
    //  getSales()
    // getStock("sales")
    getStock("firms");
  }, []);

  return (
    <div>
      <Typography
        variant="h4"
        color={"primary"}
        component="div"
        sx={{ flexGrow: 1 }}
      >
        Firms
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
        New Firm
      </Button>
      <FirmModal open={open} handleClose={handleClose} info={info} setInfo={setInfo}/>
      <Grid container gap={2} mt={3} justifyContent={"center"}>
        {firms.map((firm) => (
          <Grid item key={firm._id}>
            <FirmCard firm={firm} handleOpen={handleOpen} setInfo={setInfo} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;
