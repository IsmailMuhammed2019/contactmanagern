import React, {useState} from 'react'

const AddContact = () => {
  const [person, setPerson] = useState({name: '', email: ''})
  
  const handleChange = (e) => {
    setPerson(e.target.value)
  }



  return (
    <div className='ui main'>
      <form className='ui form'>
        <div className='field'>
        <label htmlFor="name">Name:</label>
        <input type="text" name='name' id='name' value={person.name} onChange={handleChange} />
        </div>
        <div className='field'>
        <label htmlFor="email">Email:</label>
        <input type="text" name='email' id='name' value={person.name} onChange={handleChange} />
        </div>
        <button type='submit' className='ui button blue'>Add</button>
      </form>

    </div>
  )
}

export default AddContact