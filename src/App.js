import { Stack } from '@mui/material'
import React from 'react'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    //    <Navbar></Navbar>
    <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
    </Stack>
  )
}

export default App
