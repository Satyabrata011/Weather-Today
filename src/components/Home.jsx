import React , {useEffect, useState} from 'react';




const Home = () => {
  
const [city, setCity] = useState(null);
const [search, setSearch] =useState("Angul")

  useEffect(() => {
    
    const fetchApi = async() => {
      const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c3f494be93864a77a53d3c8aeb511404`
      const response = await fetch(url);
      const resJson = await response.json();
     // console.log(response);
     setCity(resJson.main);

    }
    fetchApi(); 

  },[search])

  const containerStyle = {
    backgroundColor: '#F7E6C4', // Replace with your desired color
    media : {mobile :"768px", tab:"998px"},
  };

  return (
    <div className="background" style={containerStyle}>
      
    {<div className="container2">
      <div className="inputData">
        <input type="search"
        className="inputFeild"
        onChange={ (event) =>{ setSearch(event.target.value)} } />
        
      
    { !city ? (
      <p>
        No Data Found</p>
        ) : ( 
        <div> 
        <div className="info">
        <h2 className="location">
        <i className="fa-solid fa-street-view"></i>{search}
        
        </h2>
        <h1 className="temp">
          
        {city.temp} °Cel
        </h1>
        <p className="tempmin_max">Presure: {city.pressure}  | Humidity: {city.humidity} 
        </p>
       </div>
    </div> 
        )}
</div>
      
    
   </div>}
  </div>
    
  );

};

export default Home;