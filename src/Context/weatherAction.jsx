  
  export const FetchWeather=async(city)=>{
 const response=await fetch(`https://api.weatherapi.com/v1/current.json?key=ed713ba527d34296ad624856241803&q=${city}&aqi=yes`)
 const data = await response.json()
return data
}
