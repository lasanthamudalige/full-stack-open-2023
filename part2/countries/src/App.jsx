import { useEffect, useState } from "react"
import Search from "./components/Search"
import Countries from "./components/Countries"
import axios from "axios"

function App() {
  const [countryList, setCountries] = useState([])
  const [searchName, setSearchName] = useState('')

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return (
    <>
      <Search countryList={countryList} searchName={searchName} setCountry={setSearchName} />
      <Countries countryList={countryList} searchName={searchName} />
    </>
  )
}

export default App
