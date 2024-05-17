import { Alert, Skeleton, Stack } from '@mui/material'
import React from 'react'

export const ErrorMessage = () => {
    return (

<Alert variant="filled" severity="error">
  Fetching failed
</Alert>
    )
}

export const NoDataMessage = () => {
    return (
      <Alert sx={{ mt: 3 }} severity="warning">
        Gösterilecek veri bulunamadı
      </Alert>
    )
  }
  
  export const CardSkeleton = ({ children }) => {
    return (
      <Stack spacing={1} sx={{ mt: 3 }} alignItems={"center"}>
        <Skeleton variant="rectangular">{children}</Skeleton>
      </Stack>
    )
  }
  
  const TableSkeleton = () => {
    return (
      <Stack spacing={1} sx={{ mt: 3 }}>
        <Skeleton variant="rectangular" width="100%" height={90} />
        <Skeleton variant="rectangular" width="100%" height={50} />
        <Skeleton variant="rectangular" width="100%" height={50} />
        <Skeleton variant="rectangular" width="100%" height={50} />
        <Skeleton variant="rectangular" width="100%" height={30} />
      </Stack>
    )
  }
  



export default TableSkeleton

