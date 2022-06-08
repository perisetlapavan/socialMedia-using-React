import { ThemeProvider } from '@emotion/react'
import { createTheme, Stack } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Add from './components/Add'
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'

const App = () => {
// so mode turns from dark to light and back from light to dark to switch click .to include even backgroundcolor
// and text i include setState of backgroundcolor and text color
    const [mode, setMode] = useState("light")
    const [bgcolr,setBgcolr]=useState("white")
    const [textcolr,setTextcolr]=useState("black")
    const darkTheme = createTheme({
        palette: {
            mode:  mode 
        }
    })
    return (
        <ThemeProvider theme={darkTheme}>
            <Box bgcolor={bgcolr} color={textcolr}>
                <Navbar />
                {/* spacing={2} gives spacing between child components. through stack, i can use flexbox effect of having compon
            ents in a single horizontal line by putting direction="row" */}
                <Stack direction="row" spacing={2} justifyContent="space-between">
                    {/* i send darkmode as props to sidebar so for that i send setMode,setbgclor and settextcolr
                    because sending setMode alone leaves behind backgroundcolor and text */}
                    <Sidebar setMode={setMode} mode={mode} setBgcolr={setBgcolr} bgcolr={bgcolr} setTextcolr={setTextcolr} textcolr={textcolr}/>
                    <Feed />
                    <Rightbar />
                </Stack>
                <Add bgcolr={bgcolr} color={textcolr}/>
            </Box>
        </ThemeProvider>

    )
}

export default App
