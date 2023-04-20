import React, { useState } from 'react'

const ContactList = () => {
  const [contacts, setContacts] = useState([{id: 1, name: 'Ismail Muhammed', email: 'ismail2019@gmail.com' }, {id: 2, name: 'Ahmed Chambers', email: 'chambers@gmail.com'}])

  return (
    <div>
      <h2 style={{marginTop: '3rem'}}>Contact List</h2>
        {contacts.map((contact) => {
          const {id, name, email} = contact
          return(
            <div className='item' key={id} style={{display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
            <div className='content'>
              <div className='header'>{name}</div>
              <div>{email}</div>
            </div>
            <i className='trash alternate outline icon red' ></i>
            </div>
          )
        })}
      </div>
  )
      }

export default ContactList