import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {
        const {contacts} = props
  return (
    <div className='ui celled list'>
      <h2 style={{marginTop:'2rem'}}>Contact List</h2>
    {contacts.map((contact) => {
        const {id, name, email} = contact
        return(
            <ContactCard />
        )
    })
    }
    </div>
  )
}

export default ContactList