import React from 'react'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <div>
        <Header />
        <main className='ui container'>
        <AddContact />
        <ContactList />
        </main>
    </div>
  )
}

export default App