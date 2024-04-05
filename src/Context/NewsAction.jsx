  export const fetchNews=async(topic)=>{
     const response= await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2024-02-18&sortBy=publishedAt&apiKey=e35e80411ea74d889bb0c164b42f4f0b`) 
       const data= await response.json()
       return data.articles
  } 
