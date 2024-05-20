import Paper from "@mui/material/Paper"
import Avatar from "@mui/material/Avatar"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { pink, deepPurple, amber,green, blue, blueGrey,red,indigo } from "@mui/material/colors"
import PaidIcon from "@mui/icons-material/Paid"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import LocalMallIcon from "@mui/icons-material/LocalMall"
import { Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { yellow } from "tailwindcss/colors"

const KPICards = () => {
  const { sales, purchases } = useSelector((state) => state.stock)

  const totalSales = sales?.reduce((acc, sale) => acc + sale.amount, 0)

  const totalPurchases = purchases?.reduce(
    (acc, purchase) => acc + purchase.amount,
    0
  )

  const kpiData = [
    {
      id: 3,
      title: "purchases",
      amount: "₺" + totalPurchases.toLocaleString("tr-TR"),
      icon: <LocalMallIcon sx={{ fontSize: "1.7rem" }} />,
      // color: amber[700],
      // bgColor: amber[100],
      // paperBgColor: blue[300],
      color: deepPurple[700],
      bgColor: deepPurple[50],
      paperBgColor: deepPurple[600]
    },
    {
      id: 1,
      title: "Sales",
      icon: <PaidIcon sx={{ fontSize: "1.8rem" }} />,
      amount: "₺" + totalSales.toLocaleString("tr-TR"),
      // color: deepPurple[700],
      // bgColor: deepPurple[100],
      // paperBgColor: deepPurple[700],
      color: green[700],
      bgColor: green[50],
      paperBgColor: green[500],
    },
    
    
    {
      id: 2,
      title: "Profit",
      icon: <ShoppingBasketIcon sx={{ fontSize: "1.7rem" }} />,
      amount: "₺" + (totalSales - totalPurchases).toLocaleString("tr-TR"),
      color: indigo[700],
      bgColor: indigo[50],
      paperBgColor: indigo[600],
    },
  ]
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      flexWrap={"wrap"}
      direction={"row"}
      gap={2}
    >
      {kpiData.map((data) => (
        <Paper
          key={data.id}
          elevation={3}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            width: 275,
            p: 2,
            pl: 3,
            gap: 2,
            backgroundColor: data.paperBgColor,
            color:"white"
          }}
        >
          <Avatar
            sx={{
              bgcolor: data.bgColor,
              color: data.color,
              width: 60,
              height: 60,
            }}
          >
            {data.icon}
          </Avatar>

          <Box>
            <Typography variant="button">{data.title}</Typography>
            <Typography variant="h5">{data.amount}</Typography>
          </Box>
        </Paper>
      ))}
    </Stack>
  )
}

export default KPICards
