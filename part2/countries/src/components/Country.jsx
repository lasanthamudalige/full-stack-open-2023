import axios from "axios"
import { useEffect, useState } from "react"

const Country = ({ countryObject }) => {
	const name = countryObject.name.common
    const capital = countryObject.capital
    const area = countryObject.area
    const languages = countryObject.languages
    const flagURL = countryObject.flags.png

    // get longitude and latitude for the capital of the country
    const [lat, long] = countryObject.latlng
    console.log(countryObject);

    // import api key for the openweather api
    const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY

    const [weatherData, setWeatherData] = useState({ temperature: NaN, windSpeed: NaN, weatherIcon: '' })

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${weatherApiKey}`)
            .then(response => {
                const responseData = response.data
                setWeatherData({
                    temperature: responseData.main.temp,
                    windSpeed: responseData.wind.speed,
                    weatherIcon: responseData.weather[0].icon
                })
            })
            .catch(error => {
                console.log(error.response.data);
            })
    }, [])

    return (
        <>
            <h1>{name}</h1>
            <p>
                Capital {capital} {<br />}
                Area {area}
            </p>
            <h3>languages:</h3>
            <ul>
                {/* show languages related to the countries by mapping it as a list from the languages object */}
                {Object.keys(languages).map((key, value) => <li key={key}>{languages[key]}</li>)}
            </ul>
            <img width={175} src={flagURL} />
            <h2>Weather in {name}</h2>
            <p>Temperature {weatherData.temperature} Celsius</p>
            {/* Get icon for the related weather condition */}
            <img src={`https://openweathermap.org/img/wn/${weatherData.weatherIcon}@2x.png`}></img>
            <p>Wind {weatherData.windSpeed} m/s</p>
        </>
    )
}

export default Country
