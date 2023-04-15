import React from 'react'
import Header from './components/Header'
import ContactCard from './components/ContactCard'

const App = () => {
  return (
    <>
    <Header />
    <main className='ui container'>
        <ContactCard />
    </main>
    </>
  )
}

export default App