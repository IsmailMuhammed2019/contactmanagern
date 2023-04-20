import React, { useState } from 'react'

const AddContact = ({addPerson}) => {
  const [person, setPerson] = useState({name: '', email: ''})

  const handleChange = (e) => {
    const {name, type, value, checked} = e.target
    setPerson(prev => {
      return {
        ...prev, [name] : type === 'checkbox' ? checked : value
      }
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    if(person.name === '' || person.email === '') {
      alert('Please enter a name and email')
      addPerson(null)
      return
    }
    addPerson(person)
    setPerson({name: '', email: ''})
  }
  
  return (
    <div className='ui main'>
<form className='ui form' onSubmit={handleSubmit}>
  <div className='field'>
    <label htmlFor='name'>Name: </label>
<input type="text" id='name' name='name' value={person.name} onChange={handleChange}/>
  </div>
  <div className='field'>
    <label htmlFor='email' >Email: </label>
<input type="email" id='email' name='email' value={person.email} onChange={handleChange}/>
  </div>
  <button className='ui button green' type="submit">Add Contact</button>
</form>
    </div>
  )
}

export default AddContact