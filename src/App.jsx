import React, { useState } from 'react'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'

const App = () => {

    const data = [
    {id: 1, name: 'Ismail Muhammed', email: 'ismail@gmail.com'},
        {id: 2, name: 'Paul Lydia', email: 'paullydia@gmail.com'}

    ]

const [contacts, setContacts] = useState(data)


const addContact = (entry) => {
    setContacts([...contacts,entry])
}

  return (
    <div>
        <Header />
        <main className='ui container'>
        <AddContact addContact={addContact} />
        <ContactList contacts={contacts}/>
        </main>
    </div>
  )
}

export default App