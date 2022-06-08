import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  //data for photos in rightbar
  const photosArr = [
  { imgNo: "1", src: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/05/29/Pictures/_ec6504d4-a1a1-11ea-86ef-27b876091917.jpg" },
  { imgNo: "2", src: "https://images.newindianexpress.com/uploads/user/imagelibrary/2021/7/22/w900X450/Nandamuri_Balakrishna_PTI.jpg?w=640&dpr=1.0" },
  { imgNo: "3", src: "https://cdn.siasat.com/wp-content/uploads/2021/07/Nandamuri-Balakrishna.webp" }]
  return (
    //   to make it responsive i used  xs and sm
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Jr ntr" src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jr-ntr-15411-19-09-2017-01-52-16.jpg" />
          <Avatar alt="Brahmanandam" src="https://images.news18.com/ibnlive/uploads/2015/02/brahmafeb2.jpg?impolicy=website&width=510&height=356" />
          <Avatar alt="Chiranjeevi" src="https://m.media-amazon.com/images/M/MV5BOGQ4MTc3MWYtNmUxNi00Nzk3LWFjMDItM2Y1NmVmMDEyNWIxXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_UY317_CR3,0,214,317_AL__QL50.jpg" />
          <Avatar alt="Prabhas" src="https://cdn.siasat.com/wp-content/uploads/2022/03/prabhas-1.webp" />
          <Avatar alt="Thaman S S" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/S._Thaman_at_Damaal_Dumeel_Audio_Launch.jpg/220px-S._Thaman_at_Damaal_Dumeel_Audio_Launch.jpg" />
          <Avatar alt="Boyapati sreenu" src="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-50fc36tnlns54im8b88067bvv1-20190218232924.Medi.jpeg" />
          <Avatar alt="Allu Arjun" src="https://yt3.ggpht.com/ytc/AKedOLStCRhXN6RXKSRdKunCivFFQ76fHsVLElmUK61LvA=s88-c-k-c0x00ffffff-no-rj" />
          <Avatar alt="Vijay Devarakonda" src="https://yt3.ggpht.com/ytc/AKedOLSYb4NS6XhqBPapV9KOVd--I1BU5bYSlLgj3AkPzg=s88-c-k-c0x00ffffff-no-rj" />
        </AvatarGroup>
        {/* mt means margintop and mb means marginbottom */}
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          {photosArr.map((item) => (
            <ImageListItem key={item.imgNo}>
              <img
                src={item.src}
                alt={item.imgNo}
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Jr ntr" src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jr-ntr-15411-19-09-2017-01-52-16.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="babai, where are you??"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Jr ntr(Alludu):
                  </Typography>
                  {" boyapati got a script for you"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Boyapati Sreenu" src="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-50fc36tnlns54im8b88067bvv1-20190218232924.Medi.jpeg" />
            </ListItemAvatar>
            <ListItemText
              primary="Script"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Boyapati Sreenu:
                  </Typography>
                  {" Balayya babu, I have a script"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Chiranjeevi" src="https://m.media-amazon.com/images/M/MV5BOGQ4MTc3MWYtNmUxNi00Nzk3LWFjMDItM2Y1NmVmMDEyNWIxXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_UY317_CR3,0,214,317_AL__QL50.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Party"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' you are invited for the lunch'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar