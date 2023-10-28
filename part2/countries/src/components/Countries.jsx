import Country from "./Country";

const Countries = ({ searchName, countryList }) => {
    const countryNames = countryList.map(country => country.name.common)
    const filteredCountryNames = countryNames.filter(countryName => countryName.toLowerCase().includes(searchName.toLowerCase()))

    const getCountryData = (countryName) => {
        const countryDataList = countryList.filter(country => country.name.common === countryName)
        const country = countryDataList[0]
        return country
    }

    /* yet to fix to show a country on show country button press */
    // const viewCountry = (countryName) => {
    //     const countryObject = getCountryData(countryName)

    //     return (
    //         <>
    //             <Country countryObject={countryObject} />
    //         </>
    //     )
    // }

    // if the search name is empty
    if (!searchName) {
        return (
            <></>
        )
        // if there are less than 10 and more that one countries matching the search name
    } else if (searchName && filteredCountryNames.length <= 10 && filteredCountryNames.length > 1) {
        return (
            <>
                {filteredCountryNames.map(countryName => <li key={filteredCountryNames.indexOf(countryName)}>{countryName} <button >show</button></li >)
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