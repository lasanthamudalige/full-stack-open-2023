import { useState } from "react";
import Country from "./Country";

const Countries = ({ searchName, countryList }) => {
    const countryNames = countryList.map(country => country.name.common)
    const filteredCountryNames = countryNames.filter(countryName => countryName.toLowerCase().includes(searchName.toLowerCase()))

    const getCountryData = (countryName) => {
        const countryDataList = countryList.filter(country => country.name.common === countryName)
        // Get the country list with the matching name add get the first item of the list
        const countryData = countryDataList[0]
        return countryData
    }

    // set country variable to view when user press the show button
    const [selectedCountry, setSelectedCountry] = useState('')

    const viewCountry = (countryName) => {
        setSelectedCountry(countryName)
    }

    // if the search name is empty
    if (!searchName) {
        return (
            <></>
        )
        // if there are less than 10 and more that one countries matching the search name
    } else if (searchName && filteredCountryNames.length <= 10 && filteredCountryNames.length > 1) {
        return (
            <>
                {
                    filteredCountryNames.map((countryName, index) =>
                        <li key={index}>
                            {countryName}
                            <button onClick={() => viewCountry(countryName)}>show</button>
                            {/* if the country name matches the current country name, show the country view, else don't */}
                            {selectedCountry === countryName ? <Country countryObject={getCountryData(countryName)} /> : ''}
                        </li >)
                }
            </>
        )
        // if the is only one country matching the search name
    } else if (filteredCountryNames.length == 1) {
        const countryName = filteredCountryNames[0]
        const countryObject = getCountryData(countryName)

        return (
            <>
                <Country countryObject={countryObject} />
            </>
        )
    }
    // if there are more than 10 countries matching the search name  
    else {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }
}

export default Countries