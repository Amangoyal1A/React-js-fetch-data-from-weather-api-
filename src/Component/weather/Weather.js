import React, { useEffect, useState } from 'react';
import './style.css'
import Weathercard from './Weathercard';

const Weather = () => {

const[search,setsearch] = useState("pune");
const[tempinfo,settempinfo] = useState({});

useEffect(()=>{
    getweatherinfo()
},[])

async function getweatherinfo(){
  try{
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=02cde9eacbdafde51e78d11fa089556d`

    let res = await fetch(url);
    let data = await res.json();

    const { temp, humidity, pressure } = data.main;
    const { main: weathermood } = data.weather[0];
    const { name } = data;
    const { speed } = data.wind;
    const { country, sunset } = data.sys;

const mynewweather= {
temp,humidity,pressure,weathermood,name,speed,country,sunset
}
settempinfo(mynewweather)
  }catch(e){
   console.log(e)
  }
}




    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder='search..' autoFocus id="Search" className='searchTerm' value={search} onChange={(event)=>setsearch(event.target.value)} />
                    <button className='searchButton' type="button" onClick={getweatherinfo}>search</button>
                </div>
            </div>

            {/* our card */}
            
<Weathercard  tempinfo={tempinfo} city={search}/>
        </>
    )
}

export default Weather
