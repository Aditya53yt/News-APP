import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const NewsCard = ({news}) => {
     
  const{author,title, description, urlToImage,url}=news

  if(!news||news.length===0){
    return(
      <Container>
         <ScaleLoader color="#36d7b7" />
      </Container>
     
    )
  }

  return (
    <Card sx={{ maxWidth:1000 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={urlToImage}
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          {author}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default NewsCard