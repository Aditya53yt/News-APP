import React from 'react'
import SearchAppBar from './component/NavBar'
import Home from './component/Home'
import { NewsProvider } from './Context/NewsContext'
import { WeatherProvider } from './Context/weatherContext'



const App = () => {
  return (
   
<NewsProvider>

<SearchAppBar/> 
<WeatherProvider>
<Home/>
</WeatherProvider>
</NewsProvider>

  )
}
export default App