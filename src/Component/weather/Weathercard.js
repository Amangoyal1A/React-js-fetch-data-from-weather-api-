import React from 'react'
import moment from 'moment-timezone';

const Weathercard = ({tempinfo,city}) => {
  const cityTimezone = moment.tz(tempinfo.city).format('z');
  const cityDate = moment().tz(cityTimezone).format('MMMM Do YYYY, h:mm:ss a');

  let weatherIcon;
  switch(tempinfo.weathermood) {
    case 'Sunny':
        weatherIcon = 'wi-day-sunny';
        break;
    case 'Moon':
        weatherIcon = 'moonset';
        break;
    case 'Rain':
        weatherIcon = 'wi-day-hail';
        break;
    case 'Fog':
        weatherIcon = 'wi-fog';
        break;
    case 'Ice':
        weatherIcon = 'wi-snowflake-cold';
        break;
        case 'clouds':
        weatherIcon = 'wi-day-cloudy-gusts';
        break;
    default:
        weatherIcon = 'wi-day-sunny';
  }

  return (
    <>
      <article className='widget'>
                <div className='weatherIcon'>
                    <i className={weatherIcon}></i>
                </div>
                <div className='weatherInfo'>
                    <div className='temperature'>
                        <span>{tempinfo.temp}&deg;</span>

                    </div>
                    <div className='description'>
                        <div className='weatherCondition'>{tempinfo.weathermood}</div>
                        <div className='place'>{city},{tempinfo.country}</div>
                    </div>
                </div>
                <div className='date'>{cityDate}</div>
                {/* four coloum section */}
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
sunset <br />
{tempinfo.Sunset}
</p>
</div>                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-humidity"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            humidity <br />
                            {tempinfo.humidity}
                        </p>
                    </div>
                </div>

                <div className="weather-extra-info">
                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-rain"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            pressure<br />
                          {tempinfo.pressure}
                        </p>
                    </div>

                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-strong-wind"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            speed <br />
                           {tempinfo.speed}
                        </p>
                    </div>
                </div>
            </div>
        </article>
</>
)
}

export default Weathercard;