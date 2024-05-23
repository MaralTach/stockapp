import { Box } from '@mui/material'
import { DataGrid, GridActionsCellItem, GridToolbar } from '@mui/x-data-grid'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import useStockRequest from '../services/useStockRequest'
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import EditIcon from "@mui/icons-material/Edit"

const PurchasesTable = ({ handleOpen, setInfo}) => {
   const { purchases } = useSelector((state) => state.stock)
   const { deleteStock } = useStockRequest()
 
   const getRowId = (row) => row._id

  //  const editPurchases = () =>{


  //  } 
   const columns = [
    
     {
      field: "createdAt",
      headerName: "Date",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return new Date(row.createdAt).toLocaleString("de-DE")
      },
    },
    {
      field: "firmId",
      headerName: "Firm",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => row?.firmId?.name,
    },
    {
      field: "brandId",
      headerName: "Brand",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => row?.brandId?.name,
    },
    {
      field: "productID",
      headerName: "Product",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => row?.productId?.name,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "amount",
      headerName: "Amount",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 40,
      headerAlign: "center",
      align: "center",
      renderCell: ({
        row: { brandId, productId, quantity, price, firmId, _id },
      }) => {
         return [
           <GridActionsCellItem
           key={"edit"}
           icon={<EditIcon />}           
           onClick={() => {
             handleOpen()
             setInfo({ _id, brandId, productId, quantity, price, firmId})
           }}
           label="Edit"
         />,
         <GridActionsCellItem
         key={"delete"}
         icon={<DeleteOutlineIcon />}
         onClick={() => deleteStock("purchases", _id)}
         label="Delete"
       />,
         ]
       },
     },
     
   ]

   return (
      <Box sx={{height: 400, width: "100%", maxWidth: 1200 ,borderRadius: "10px", 
      boxShadow: "0px 0px 10px black" }}>
        <DataGrid
                 autoHeight
                 rows={purchases}
                 columns={columns}
                 pageSizeOptions={[20, 50, 75, 100]} //? sayfa basina satir sayisi
                 disableRowSelectionOnClick
                 slots={{ toolbar: GridToolbar }}
                 getRowId={getRowId}
        />
      </Box>
    )
}

export default PurchasesTable