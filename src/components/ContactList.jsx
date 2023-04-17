import React from 'react'
import ContactCard from './ContactCard'

const ContactList = ({contacts}) => {
  return (
    <div style={{marginTop: '3rem'}}>
      <h2 className='header' style={{ marginBottom: '2rem'}}>Contacts List</h2>
      <div className='ui celled list'>
        {contacts.map((contact) => {
          return (
            <ContactCard {...contact} key={contact.id}/>
          )
})}
      </div>
    </div>
  )
}

export default ContactList