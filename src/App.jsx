// import React, { useState } from 'react'
// import Header from './components/Header'
// import AddContact from './components/AddContact'
// // import ContactCard from './components/ContactCard'
// import ContactList from './components/ContactList'

// const App = () => {
// const [person, setPerson] = useState({name:'', email: ''})
  
//   const [contacts, setContacts] = useState([{id: 1, name: 'Ismail Muhammed', email: 'imuhammed@gmail.com'}, {id: 2, name: 'Opeyemi Omojoro', email: 'oomojoro@gmail.com'}])

//   const handleChange = (e) => {
//     setPerson({name: e.target.value, email: e.target.value})
//   }

//   const addContact = (e) => {
//     e.preventDefault()
//     setContacts(...contacts, {id: new Date().getMinutes.toString(), name: name, email: email} )
//     setPerson({name: '', email: ''})
//   }

//   return (
//     <div className='ui container'>
//       <Header />
//       <AddContact addContact={addContact} handleChange={handleChange}/>
//       <ContactList  contacts={contacts} />
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react'
import user from './assets/imgs/user.png'
import {uuid} from ''


const headerStyle ={
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '2rem',
  marginBottom: '2rem',
  textTransform: 'uppercase'
}

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts'))})

  const [person, setPerson] = useState({name: '', email: ''})

    const handleChange = (e) => {
      const {name, value} = e.target
      setPerson((prev) => {
        return {...prev, [name] : value}
      })
    }

    const handleSubmit = (e) => {
      const {name, email} = person
    e.preventDefault()
    if(!name && !email)return 

    const newPerson = {id: new Date().getMinutes().toString(), ...person}
    setContacts([...contacts, newPerson])
    setPerson({name: '', email: ''})
  }

  const deleteContact = (id) => {
    const newContact = contacts.filter((contact) => contact.id !== id)
    setContacts(newContact)
  }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  },[contacts])




  return (
    <div className='ui container'>
      <div className='ui fixed menu'>
        <div className='ui container center'>
            <h2 style={headerStyle}>Contact Manager</h2>
        </div>
      </div>
      <div className='ui main' style={{marginTop:'8rem'}}>
        <h2>Add Contact</h2>
        <form className='ui form' onSubmit={handleSubmit}>
            <div className='field'>
                <label>Name</label>
                <input type='text' name='name' placeholder='Name' value={person.name} onChange={handleChange}/>
            </div>
            <div className='field'>
                <label>Email</label>
                <input type='text' name='email' placeholder='Email' value={person.email} onChange={handleChange}/>
            </div>
            <button className='ui button blue' type='submit'>Add Contact</button>
        </form>
      </div>
      <div className='ui celled list'>
      <h2 style={{marginTop:'2rem'}}>Contact List</h2>
    {contacts.map((contact) => {
          const {id, name, email} = contact
        return(
          <div className='item' key={id} style={{display: 'table', width: '100%'}}>
                        <img src={user} alt={name} className='ui avatar image' style={{marginTop:'1rem'}} />
          <div className='content' style={{marginTop:'1rem', marginBottom:'1rem'}}>
              <div className='header'>{name}</div>
              <div>{email}</div>
          </div>
          <i className='trash alternate outline icon red' style={{verticalAlign: 'middle', cursor:'pointer'}} onClick={() => deleteContact(id)}></i>
      </div>
        )
    })
    }
    </div>
    </div>
  )
}

export default App
