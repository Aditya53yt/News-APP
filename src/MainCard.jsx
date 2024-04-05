import { Container, Grid } from '@mui/material'
import React, { useContext } from 'react'
import NewsCard from './NewsCard'
import WeatherCard from './WeatherCard'
import NewsContext from './Context/NewsContext'



const MainCard = () => {


  const{allNews}=useContext(NewsContext)
  

  return (

 <Grid container spacing={2}>
    <Grid item xs={8} md={8} >
  {
    allNews.map((news,index)=><NewsCard key={index} news={news}/>)
  }
    </Grid>
    <Grid item xs={4} md={4}>
      {/* <Item>xs=6 md=4</Item> */}
   {
    //  allWeather.map((weather,index)=><WeatherCard key={index} weather={weather}/>)
 <WeatherCard/>
   }
    </Grid>
    </Grid>


  )
}

export default MainCard