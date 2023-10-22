import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import contactService from './services/contacts'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    contactService
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts)
      })
  }, [])

  // Add useStates to search keyword and filter variable 
  const [searchKeyword, setSearchKeyword] = useState('')
  const [filter, setFilterStatus] = useState(false)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        setFilterStatus={setFilterStatus}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} searchKeyword={searchKeyword}  setPersons={setPersons}/>
    </div>
  )
}

export default App