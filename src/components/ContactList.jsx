import React from 'react'
import ContactCard from './ContactCard'

const ContactList = ({contacts, deleteContacts}) => {

  const clickHandler =(id) => {
    deleteContacts(id)
  }
  return (
    <div className='ui celled list' style={{marginTop: '3rem'}}>
      <h2 style={{marginBottom: '1rem'}}>Contact List</h2>
      {contacts.map((contact) => {
        return (
          <ContactCard key={contact.id} contact={contact} clickHandler={clickHandler}/>
        )
      })}
    </div>
  )
}

export default ContactList