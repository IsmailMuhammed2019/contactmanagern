import React from 'react'

const AddContact = ({addContact, handleChange}) => {

  return (
    <div className='ui main' style={{marginTop:'8rem'}}>
        <h2>Add Contact</h2>
        <form className='ui form' onSubmit={addContact}>
            <div className='field'>
                <label>Name</label>
                <input type='text' name='name' placeholder='Name' value={name} onChange={() => handleChange(e)}/>
            </div>
            <div className='field'>
                <label>Email</label>
                <input type='text' name='email' placeholder='Email' value={email} onChange={() => handleChange(e)}/>
            </div>
            <button className='ui button blue' type='submit'>Add Contact</button>
        </form>
    </div>
  )
}

export default AddContact