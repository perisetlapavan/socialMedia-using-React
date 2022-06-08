import { Box } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    //   to make it responsive i used  xs and sm
    <Box bgcolor="brown" flex={2} p={2} sx={{display:{xs:"none" , sm:"block"}}}>Rightbar</Box>
  )
}

export default Rightbar