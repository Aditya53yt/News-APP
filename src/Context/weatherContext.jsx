import { createContext, useReducer } from "react";
import { weatherReducer } from "./weatherReducer";

const WeatherContext= createContext()

export const WeatherProvider=({children})=>{
 
    const initalState={
        allWeather:[]

    }
const [state,Dispatch]=useReducer(weatherReducer,initalState)





return(
    <WeatherContext.Provider value={{...state,Dispatch}}>
    {children}
</WeatherContext.Provider>

)


 }
 export default WeatherContext
