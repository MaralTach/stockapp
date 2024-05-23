import { useEffect, useState } from "react";
import PurchasesTable from "../components/PurchasesTable";
import useStockRequest from "../services/useStockRequest";
import PurchasesModal from "../components/PurchasesModal";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import TableSkeleton, { ErrorMessage, NoDataMessage } from "../components/DataFetchMessages";

const Purchases = () => {
  const {error,loading, purchases } = useSelector((state) => state.stock)
  const { getStock,getProPurBraFirmStock } = useStockRequest()

  const [open, setOpen] = useState(false)

  const initialState = {
    brandId: "",
    firmId: "",
    productId: "",
    quantity: "",
    price: "",
  }

  const handleOpen = () => setOpen(true)

  const [info, setInfo] = useState(initialState)
  const handleClose = () => {
    setOpen(false)
    setInfo(initialState)
  }

  useEffect(() => {
    // getStock("purchases")
    // getStock("firms")
    // getStock("products")
    // getStock("brands")

    getProPurBraFirmStock()
  }, [])
	return (
	<div>
      <Button
        onClick={handleOpen}
        color="inherit"
        variant="contained"
        disabled={error}
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
        New Purchase
      </Button>

      {/* {error && <ErrorMessage/> } */}
      {/* {!error &&  <PurchasesTable handleOpen={handleOpen} setInfo={setInfo}/>  } */}
		{/* <PurchasesTable handleOpen={handleOpen} setInfo={setInfo} /> */}

    {loading && purchases.length>0 && <TableSkeleton/>}
      {!loading && !purchases.length && <NoDataMessage />}
      {!error && !loading && <PurchasesTable
          handleClose={handleClose}
          info={info}
          setInfo={setInfo}
          handleOpen={handleOpen}
        />}

    <PurchasesModal
        handleClose={handleClose}
        open={open}
        info={info}
        setInfo={setInfo}
      />
	</div>)
};

export default Purchases;
