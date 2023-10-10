import { useEffect } from "react"

const Filter = (props) => {
    const { setFilterStatus, searchKeyword, setSearchKeyword } = props

    // update searchKeyword useState using this function
    const handleSearchKeywordChange = (event) => {
        setSearchKeyword(event.target.value)
    }

    // Monitor changes to search keyword using useEffect
    useEffect(() => {
        // If the search input is empty assign filter status to false or assign it to true
        if (searchKeyword === '') {
            setFilterStatus(false)
        } else {
            setFilterStatus(true)
        }
    }, [searchKeyword])

    return (
        <>Filter shown with <input value={searchKeyword} onChange={handleSearchKeywordChange} /></>
    )
}

export default Filter