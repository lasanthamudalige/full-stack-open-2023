import Person from './Person'
import contactService from '../services/contacts'

const Persons = ({ persons, filter, searchKeyword, setPersons, setNotification }) => {
    let newPersonsList = persons

    // If the filter status is true assign the filtered list to personsList or persons 
    if (filter) {
        newPersonsList = persons.filter(person => person.name.toLowerCase().includes(searchKeyword.toLowerCase()));
        // SetNewPersonsList(filteredList)
    }

    const deletePerson = (id) => {
        // look for the person in the persons array
        const personToDeleteList = persons.filter(person => person.id === id)
        // if personToDelete array is not empty confirm the delete operation and delete
        if (personToDeleteList != []) {
            const personToDelete = personToDeleteList[0]
            if (window.confirm(`Delete ${personToDelete.name} ?`)) {
                contactService
                    .remove(id)
                    .then(() => {
                        const newPersons = persons.filter(person => person.id !== id)
                        setPersons(newPersons)
                        // console.log(`Successfully deleted ${returnedPerson.name}`);
                        setNotification({ type: 'success', message: `Deleted ${personToDelete.name}` })
                    })
                    .catch(err => {
                        // console.log(err.response.status);
                        // get the error code from error json data
                        const errorCode = err.response.status;
                        if (errorCode === 404) {
                            setNotification({ type: 'error', message: `Information of ${personToDelete.name} has already been removed from server` })
                        }
                    })
            }
        }
    }


    //Pass id, name and number to the person component and pass the id as the key for the list item
    return (
        <>
            {newPersonsList.map(person => <Person key={person.id} id={person.id} name={person.name} number={person.number} deletePerson={deletePerson} />)}
        </>
    )
}

export default Persons