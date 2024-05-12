import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

export default function FirmCard({ firm }) {

const btnStyle = {
    "&:hover": {
        color:"red", cursor: "pointer",
    },
}
  const { address, _id, image, name, phone } = firm;
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "300px",
        height: "400px",
        p: 2,
        borderRadius: "10px",
      }}
    >
      <CardMedia component="img" alt={name} height="140" image={image} sx={{ objectFit: "contain" }} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={2} >
          {phone}
        </Typography>
      </CardContent>
      <CardActions>
        <DeleteOutlineIcon sx={btnStyle} />
        <EditIcon  sx={btnStyle}/>
      </CardActions>
    </Card>
  );
}
