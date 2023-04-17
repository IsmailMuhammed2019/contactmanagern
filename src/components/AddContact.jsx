import React from 'react'

const AddContact = () => {
  return (
    <div className='ui main'>
<form className='ui form'>
  <div className='field'>
    <label htmlFor="name">Name:</label>
    <input type="text" name='name' id='name' />
  </div>
  <div className='field'>
    <label htmlFor="email">Email:</label>
    <input type="text" name='email' id='email' />
  </div>
  <button className='ui button green' type='submit'>Add Contact</button>
</form>
    </div>
  )
}

export default AddContact