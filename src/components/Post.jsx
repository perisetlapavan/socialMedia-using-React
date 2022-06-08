import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react' ;
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const Post = () => {
  return (
    <div>
        <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Balayya Fans Association"
        subheader="September 14, 2021"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://assets.thehansindia.com/h-upload/2022/01/18/1195496-akhanda.webp"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Nandamuri Balakrishna and Pragya Jaiswal played the lead roles in the new Telugu film Akhanda. 
        Boyapati Srinu is the film's director. The film is bankrolled by Dwaraka Creations
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {/* icon changes to checkedIcon on click */}
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>       
      </CardActions>
    </Card>
    </div>
  )
}

export default Post