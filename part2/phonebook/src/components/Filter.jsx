const Filter = ({ searchKeyword, setSearchKeyword }) => {
	// update searchKeyword useState using this function
	const handleSearchKeywordChange = (event) => {
		setSearchKeyword(event.target.value)
	}

	return (
		<>Filter shown with <input value={searchKeyword} onChange={handleSearchKeywordChange} /></>
	)
}

export default Filter
