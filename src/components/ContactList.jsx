import React, {useState} from 'react'


const ContactList = ({contacts}) => {  
  
  return (
    <div className='ui celled list'>
      <h3>Contact List</h3>
      {contacts.map((contact) => {
        const {id, name, email} = contact
        return (
          <div key={id} className='item' >
            <div className='content'  >
            <div className='header'>{name}</div>
            <div>{email}</div>
            </div>
            <i className='trash alternate red outline icon'></i>
          </div>
        )
      })}
    </div>
  )
}

export default ContactList