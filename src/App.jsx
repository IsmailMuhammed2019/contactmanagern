import React from 'react'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <>
    <Header />
    <div className='ui container'>
        <AddContact />
        <ContactList />
    </div>
    </>
  )
}

export default App