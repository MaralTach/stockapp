import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import useStockRequest from "../services/useStockRequest";
import { useEffect } from "react";

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

export default function FirmModal({ open, handleClose, info, setInfo }) {
    // const [info, setInfo] = React.useState({
    //     name:"",
    //     phone:"",
    //     address:"",
    //     image:""

    // })
// useEffect(()=>{
//     setInfo({
//         name:"",
//         phone:"",
//         address:"",
//         image:""
//     })
// }, [open])
    const {postStock,putStock} = useStockRequest()
    const handleChange = (e) => {
        setInfo({...info, [e.target.name]: e.target.value})
    }
   
     const handleSubmit = (e) => {
        e.preventDefault()

       if (info._id) {
        putStock("firms", info)
       } else {
        
         postStock("firms", info)
       }

 
        // setInfo({
        //     name:"",
        //     phone:"",
        //     address:"",
        //     image:""
        // })
          handleClose()

     }

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}

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
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />

            <TextField
              label="Phone Number"
              name="phone"
              id="phone"
              type="tel"
              variant="outlined"
              value={info.phone}
              onChange={handleChange}
              required
            />
            <TextField
              label="Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info.address}
              onChange={handleChange}
              required
            />
            <TextField
              label="Image Url"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
              required
            />

            <Button variant="contained" type="submit" sx={{backgroundColor:"blueviolet", color:"white"}} >
             {info._id ? "UPDATE FIRM" : "ADD FIRM"}  
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
