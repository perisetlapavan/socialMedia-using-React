import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React ,{useState} from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import { Box } from '@mui/system';
import MailIcon from '@mui/icons-material/Mail';
import { Notifications } from '@mui/icons-material';


// this helps in preventing inline styling to Toolbar that has properties fixed, same for below styled
const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    // breakpoints to make responsiveness possible
    [theme.breakpoints.up('sm')]: {
        display: "flex",
    },

}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    // breakpoints to make responsiveness possible
    [theme.breakpoints.up('sm')]: {
        display: "none",
    },
}));

const Navbar = () => {
    // open state is used to open and close the menu of balayya profile. see open attribute in menu tag of profile
    const [open,setOpen]=useState(false)
    return (
        // Appbar gives bar while Toolbar gives padding effect to Appbar. static in position attribute makes components 
        // that are underneath it go below so it becomes visible.
        // if i use position='sticky' , navbar will always be at the top
        <AppBar position='sticky'>
            <StyledToolBar>
                {/* here i used xs and sm to make it responsive */}
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>LAMA DEV</Typography>
                <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder='search . . .' /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar 
                          onClick={e=>setOpen(true)}
                          sx={{ width: 30, height: 30 }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Nandamuri_Balakrishna.jpg/220px-Nandamuri_Balakrishna.jpg' />
                </Icons>
                <UserBox onClick={e=>setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30 }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Nandamuri_Balakrishna.jpg/220px-Nandamuri_Balakrishna.jpg' />
                    <Typography variant="span">
                        Balayya
                    </Typography>
                </UserBox>
            </StyledToolBar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e=>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar