import Person from "./Person"
import contactService from "../services/contacts"

const Persons = (props) => {
    const { persons, filter, searchKeyword, setPersons } = props

    let personsList = null

    // If the filter status is true assign the filtered list to personsList or persons 
    if (filter) {
        personsList = persons.filter(person => person.name.toLowerCase().includes(searchKeyword.toLowerCase()));
    } else {
        personsList = persons
    }

    const deletePerson = (id) => {
        // look for the person in the persons array
        const personToDelete = persons.filter(person => person.id === id)
        // if personToDelete array is not empty confirm the delete operation and delete
        if (personToDelete != []) {
            const person = personToDelete[0]
            if (window.confirm(`Delete ${person.name} ?`)) {
                contactService
                    .remove(id)
                    .then(() => {
                        const newPersons = persons.filter(person => person.id !== id)
                        setPersons(newPersons)
                        // console.log(`Successfully deleted ${returnedPerson.name}`);
                    })
            }
        }
    }


    //Pass id, name and number to the person component and pass the id as the key for the list item
    return (
        <>
            {personsList.map(person => <Person key={person.id} id={person.id} name={person.name} number={person.number} deletePerson={deletePerson} />)}
        </>
    )
}

export default Persons