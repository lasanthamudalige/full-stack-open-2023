const Search = ({ searchName, setCountry }) => {

    // update search name on change
    const handleChange = (event) => {
        setCountry(event.target.value)
    }

    return (
        <>
            <form>
                <>Find countries <input value={searchName} onChange={handleChange} /></>
            </form>
        </>
    )
}

export default Search