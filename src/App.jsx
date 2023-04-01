import React, { useState } from 'react'
import Header from './components/Header'
import AddContact from './components/AddContact'
// import ContactCard from './components/ContactCard'
import ContactList from './components/ContactList'

const App = () => {
  const [contacts, setContacts] = useState([{id: 1, name: 'Ismail Muhammed', email: 'imuhammed@gmail.com'}, {id: 2, name: 'Opeyemi Omojoro', email: 'oomojoro@gmail.com'}])
  return (
    <div className='ui container'>
      <Header />
      <AddContact contacts={contacts}/>
    </div>
  )
}

export default App
