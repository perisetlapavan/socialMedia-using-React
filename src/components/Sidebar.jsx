import { Box } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    //   to make it responsive i used  xs and sm
    <Box bgcolor="skyblue" flex={1} p={2} sx={{display:{xs:"none" , sm:"block"}}}>Sidebar</Box>
  )
}

export default Sidebar