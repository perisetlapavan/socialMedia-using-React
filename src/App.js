import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'

const App = () => {
    return (
        <Box>
            <Navbar />
            {/* spacing={2} gives spacing between child components. through stack, i can use flexbox effect of having compon
            ents in a single horizontal line by putting direction="row" */}
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar />
                <Feed />
                <Rightbar />
            </Stack>
        </Box>
    )
}

export default App
