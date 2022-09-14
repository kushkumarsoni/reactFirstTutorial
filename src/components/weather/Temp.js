import React,{useState,useEffect} from 'react'
import Weather from './Weather';
import './style.css';

const Temp = () => {
    const [inputData,setInputData] = useState("Lucknow");
    const [tempInfo,setTempInfo] = useState({});
    const getWeatherInfo = async() =>{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputData}&units=metric&appid=b4d2dd69c8e3ea07435ed9e1e0a89ffd`;
            const res = await fetch(url);
            const data = await res.json();
            const {temp,humidity,pressure} = data.main;
            const {main:weathermode} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country,sunset} = data.sys;
            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermode,
                name,
                speed,
                country,
                sunset
            };
            setTempInfo(myNewWeatherInfo);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getWeatherInfo();
    },[]);
  return (
    <>
        <div className="wrap">
            <div className="search">
                <input type="text" value={inputData} onChange={(e)=>setInputData(e.target.value)} placeholder="Search by city name..." autoFocus id='search' className="searchTerm"/>
                <button type="button" className="searchButton" onClick={getWeatherInfo}>Search</button>
            </div>
        </div>
       <Weather tempInfo={tempInfo}/>
    </>
  )
}

export default Temp