import React from 'react'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactCard from './components/ContactCard'

const App = () => {
  return (
    <>
    <Header />
    <main className='ui container'>
        <AddContact />
        <ContactCard />
    </main>
    </>
  )
}

export default App