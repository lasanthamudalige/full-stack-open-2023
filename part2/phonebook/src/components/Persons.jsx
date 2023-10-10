import Person from "./Person"

const Persons = (props) => {
    const { persons, filter, searchKeyword } = props

    let personsList = null

    // If the filter status is true assign the filtered list to personsList or persons 
    if (filter) {
        personsList = persons.filter((person) => person.name.toLowerCase().includes(searchKeyword.toLowerCase()));
    } else {
        personsList = persons
    }

    return (
        <>
            {personsList.map(person => <Person key={person.id} name={person.name} number={person.number} />)}
        </>
    )
}

export default Persons