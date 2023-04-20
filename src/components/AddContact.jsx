import React from 'react'

const AddContact = () => {
  return (
    <div className='ui main'>
      <h2>Add Contact</h2>
      <div className='ui form'>
        <div className='field'>
          <label htmlFor="name">Name: </label>
          <input type="text" id='name'/>
        </div>
        <div className='field'>
          <label htmlFor="email">Email: </label>
          <input type="text" id='email' />
        </div>
        <button className='ui button green'>Add Contact</button>
      </div>
    </div>
  )
}

export default AddContact