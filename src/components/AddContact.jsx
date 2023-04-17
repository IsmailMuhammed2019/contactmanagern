import React, { useState } from 'react'

const AddContact = ({addContact}) => {
  const [person, setPerson] = useState({name: '', email: ''})

  function handleChange(e){
    const {type, name, value, checked} = e.target
    setPerson(prevData => {
      return {
        ...prevData, [name]: type ==='checkbox' ? checked : value
      }
    })
  }

const handleSubmit = (e) => {
  e.preventDefault()
  addContact(
    person
  )
}

  return (
    <div className='ui main'>
      <form className='ui form' onSubmit={handleSubmit}>
        <div className='field'>
          <label htmlFor="name">Name:</label>
          <input type="text" name='name' id='name' value={person.name} onChange={handleChange}/>
        </div>
        <div className='field'>
          <label htmlFor="email">Email:</label>
          <input type="text" name='email' id='email' value={person.email} onChange={handleChange} />
        </div>
        <button className='ui button green' type='submit'>Add Contact</button>
      </form>
    </div>
  )
}

export default AddContact