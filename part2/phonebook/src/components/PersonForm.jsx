import { useState } from 'react'
import contactService from '../services/contacts'

const PersonForm = ({ persons, setPersons, setNotification }) => {

    // new person useState
    const [newPerson, setNewPerson] = useState({ name: '', number: '' }) // set the id of the first input contact as '5'

    // Separate functions to update the new person object according to the input
    const handleNameChange = (event) => {
        setNewPerson({ ...newPerson, name: event.target.value })
    }

    const handleNumberChange = (event) => {
        setNewPerson({ ...newPerson, number: event.target.value })
    }

    // clear newPerson object
    const clearNewPerson = () => {
        setNewPerson({ name: '', number: '' })
    }

    // submit function
    const addPerson = (event) => {
        // Stop page from reloading
        event.preventDefault()
        // Find if the name of the person is already on the persons array
        const foundPerson = persons.filter(person => person.name === newPerson.name)
        // If the name is in the persons array (found person will not return an empty array)
        if (foundPerson.length !== 0) {
            // console.log(foundPerson);
            const person = foundPerson[0]
            // show an confirmation window
            if (window.confirm(`${person.name} is already added to phoneBook, replace the old number with a new one?`)) {
                contactService
                    .update(person.id, newPerson)
                    .then(returnedPerson => {
                        // create a new list with map function and if the name is in the array, return the new person with the new number 
                        const newPersons = persons.map((person) => person.name !== newPerson.name ? person : returnedPerson)
                        setPersons(newPersons)
                        clearNewPerson()
                        // console.log(`Successfully updated ${returnedPerson.name}`);
                        setNotification({ type: 'success', message: `updated ${returnedPerson.name}` })
                    })
            }
        } else {
            // add a new id to the contact using persons array length
            setNewPerson({ ...newPerson, id: persons.length + 1 })
            contactService
                .create(newPerson)
                .then(returnedPerson => {
                    // create a new array called newPersons and add pervious persons array and the new person object from response
                    const newPersons = [...persons, returnedPerson]
                    setPersons(newPersons)
                    clearNewPerson() // clear newPerson object and update the id
                    // console.log(`Successfully added ${returnedPerson.name}`);
                    setNotification({ type: 'success', message: `Added ${returnedPerson.name}` })
                })
        }
    }


    return (
        <>
            <form onSubmit={addPerson}>
                <div>Name: <input value={newPerson.name} onChange={handleNameChange} /></div>
                <div>Number: <input value={newPerson.number} onChange={handleNumberChange} /></div>
                <div><button type="submit">add</button></div>
            </form>
        </>
    )
}

export default PersonForm