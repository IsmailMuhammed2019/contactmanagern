import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList' 

const App = () => {
    const [contacts, setContacts] = useState(() => {
        const savedContacts = localStorage.getItem('contacts')
        const initialValue = JSON.parse(savedContacts)
        return initialValue || ''
    }) 

    const addPerson = (contact) => {
        if(contact == null) return
        setContacts([...contacts, {id: new Date().getTime().toString(), ...contacts}])
    }

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])

    const deleteContact = (id) => {
        const newContacts = contacts.filter((contact) => contact.id !== id)
        setContacts([...contacts, newContacts])
    }

  return (
    <>
<Header />
    <main className='ui container'>
<AddContact addPerson={addPerson}/>
<ContactList contacts={contacts} deleteContact={deleteContact}/>
    </main>
</>
  )
}

export default App