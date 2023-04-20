import React from 'react'
import Header from './components/Header'
import AddContact from './components/AddContact'

const App = () => {
  return (
    <>
    <Header />
    <div className='ui container'>
        <AddContact />
    </div>
    </>
  )
}

export default App