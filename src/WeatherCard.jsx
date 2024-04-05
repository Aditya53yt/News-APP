import { Padding } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import WeatherContext from './Context/weatherContext'
import { FetchWeather } from './Context/weatherAction'

const WeatherCard = () => {
  const{allWeather:weather,Dispatch}=useContext(WeatherContext)
 
 console.log(weather);
  const getWeather=async(city)=>{
    const data= await FetchWeather(city)
   
    Dispatch({
      type:"GET_WEATHER",
      payload:data
    })
   }
   useEffect(()=>{
    getWeather('indore')
   },[])
   if(!weather || weather.length===0){
    
  <Typography>loading...</Typography>
   
    
  }

//  console.log(weather?.location?.name);

     return (
    <Card sx={{ maxWidth: 400}}>
    <Typography style={{textAlign:"center" ,Padding:"20px 0",color:"#ED4C67", fontSize:"30px"}}> Today Weather</Typography>

    <CardMedia
      sx={{ height: 120}}
      image={weather.current?.condition.icon}  
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
       {weather.location?.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
     {weather.current?.temp_c}
      </Typography>
      <Typography variant="body2" color="text.secondary">
     {weather.current?.condition.text}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  )
}

export default WeatherCard