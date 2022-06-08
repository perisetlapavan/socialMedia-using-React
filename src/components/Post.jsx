import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react' ;
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const Post = (props) => {
  return (
    <div>
        <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Nandamuri_Balakrishna.jpg/220px-Nandamuri_Balakrishna.jpg">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="BalaKrishna"
        subheader={props.date}
      />
      <CardMedia
        component="img"
        height="20%"
        image={props.src}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {props.info}
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