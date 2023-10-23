import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import contactService from './services/contacts'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [searchKeyword, setSearchKeyword] = useState('')
  const [filter, setFilterStatus] = useState(false)
  const [notification, setNotification] = useState({ type: '', message: '' })

  useEffect(() => {
    contactService
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts)
      })

    // monitor changes to search keyword using useEffect and update filter status
    if (searchKeyword) {
      setFilterStatus(true)
    } else {
      setFilterStatus(false)
    }
  }, [searchKeyword])


  return (
    <div>
      <h1>Phonebook</h1>
      <Notification notification={notification} />
      <Filter
        setFilterStatus={setFilterStatus}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} setNotification={setNotification} />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} searchKeyword={searchKeyword} setPersons={setPersons}
        setNotification={setNotification} />
    </div>
  )
}

export default App