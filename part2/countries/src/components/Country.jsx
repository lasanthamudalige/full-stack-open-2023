const Country = ({ countryObject }) => {
    const name = countryObject.name.common
    const capital = countryObject.capital
    const area = countryObject.area
    const languages = countryObject.languages
    const flagURL = countryObject.flags.png

    return (
        <>
            <h1>{name}</h1>
            <p>
                Capital {capital} {<br />}
                Area {area}
            </p>
            <h3>languages:</h3>
            <ul>
                {Object.keys(languages).map((key, value) => <li key={key}>{languages[key]}</li>)}
            </ul>
            <img src={flagURL} />
        </>
    )
}

export default Country