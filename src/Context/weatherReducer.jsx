  export const weatherReducer=(state,action)=>{
 switch(action.type)
   {
    case "GET_WEATHER":
        return{
            ...state,
            allWeather:action.payload
        }

   }
 }