import React from 'react'

const AddContact = () => {
  return (
    <div className='ui main'>
      <form className='ui form'>
        <div className='field'>
        <label htmlFor="name">Name:</label>
        <input type="text" name='name' id='name' value='name' />
        </div>
        <div className='field'>
        <label htmlFor="name">Name:</label>
        <input type="text" name='name' id='name' value='name' />
        </div>
        <button type='submit' className='ui button blue'>Add</button>
      </form>

    </div>
  )
}

export default AddContact