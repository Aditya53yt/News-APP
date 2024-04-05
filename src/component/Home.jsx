import React, { useContext, useEffect } from 'react'
import SimpleSlider from '../component/slider'
import { Card, CircularProgress, Typography } from '@mui/material'
import MainCard from '../MainCard'
import NewsContext from '../Context/NewsContext'
import { fetchNews } from '../Context/NewsAction'
import { RingLoader   } from 'react-spinners'
import { WeatherProvider } from '../Context/weatherContext'


const Home = () => {

   const {Dispatch,allNews}= useContext(NewsContext)
   
   const getNews=async(topic)=>{
    const data= await fetchNews(topic)
   
    Dispatch({
      type:"GET_NEWS",
      payload:data
    })
   }
   


   useEffect(()=>{
    getNews("indore")
 
 
   },[])
 


   if(!allNews || allNews.length===0 ) {
    return(
      <Typography style={{textAlign:'center',padding:'30px 0px', fontSize:'30px', display:'flex', alignItems:'center' ,justifyContent:"center"}}>
 
 <RingLoader  color="#ED4C67"  size={200}/>
</Typography>
    )
   }

  return (
    <>
<SimpleSlider/>
<Typography style={{textAlign:'center',padding:'30px 0px', fontSize:'30px' }}>
  Top News
</Typography>
<WeatherProvider>
<MainCard/>
</WeatherProvider>
    </>
  )
}

export default Home