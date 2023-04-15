import React, {useState} from 'react'
import AddContact from './AddContact'
import ContactList from './ContactList'

const ContactCard = () => {
  const contacts = [
    {
      name: 'Ismail',
      email: 'ismail@gmail.com'
    },
    {
      name: 'Hawa',
      email: 'hawa@gmail.com'
    }
  ]
  return (
    <div>
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  )
}

export default ContactCard