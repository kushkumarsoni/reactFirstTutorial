import React from 'react'

const Weather = ({tempInfo}) => {
  const [weather,setWeather] = React.useState("");
    const {
      temp,
      humidity,
      pressure,
      weathermode,
      name,
      speed,
      country,
      sunset
  } = tempInfo;

  React.useEffect(()=>{
    if(weathermode){
      switch(weathermode){
        case "Clouds":
           setWeather("wi-day-cloudy");
        break;
        case "Haze":
           setWeather("wi-fog");
        break;
        case "Clear" :
           setWeather("wi-day-sunny");
        break;
        case "Mist" :
           setWeather("wi-dust");
        break;
        default:
          setWeather("wi-day-sunny");
          break;
      }
    }
  },[weathermode]);

  let sec = sunset;
  let date = new Date(sec*1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    //a091b5e6e703afb34e082f0c5468d42e
    //https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=a091b5e6e703afb34e082f0c5468d42e
    <>
       <article className='widget'>
            <div className="weatherIcon">
                <i className={`wi ${weather}`}></i>
            </div>
            <div className='weatherInfo'>
                <div className='temperature'>
                    <span className=''>{temp}&deg;</span>
                </div>
                <div className='description'>
                    <div className='weatherCondition'>
                        Sunny
                    </div>
                    <div className='place'>
                        {name},{ country }
                    </div>
                </div>
            </div>
            <div className='date'>
                { new Date().toLocaleString() }
            </div>
            <div className='extra-temp'>
                <div className='temp-info-minmax'>
                    <div className='two-sided-section'>
                        <p><i className={"wi wi-sunset"}></i></p>
                        <p className='extra-info-leftside'>
                            {timeStr} <br/> Sunset
                        </p>
                    </div>
                    <div className='two-sided-section'>
                        <p><i className={"wi wi-humidity"}></i></p>
                        <p className='extra-info-leftside'>
                            {humidity} <br/> humidity
                        </p>
                    </div>
                </div>
                <div className='weather-extra-info'>
                <div className='two-sided-section'>
                        <p><i className={"wi wi-rain"}></i></p>
                        <p className='extra-info-leftside'>
                            {pressure} <br/> Presure
                        </p>
                    </div>
                    <div className='two-sided-section'>
                        <p><i className={"wi wi-strong-wind"}></i></p>
                        <p className='extra-info-leftside'>
                            {speed} <br/> Speed
                        </p>
                    </div>
                </div>
            </div>
        </article>
    </>
  )
}

export default Weather