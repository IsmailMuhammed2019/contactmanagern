import React, {useState} from 'react'
import AddContact from './AddContact'
import ContactList from './ContactList'

const ContactCard = () => {
  const contacts = [
    {
      id: 1,
      name: 'Ismail',
      email: 'ismail@gmail.com'
    },
    {
      id: 2,
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