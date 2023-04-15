import React, {useState} from 'react'
import AddContact from './AddContact'
import ContactList from './ContactList'

const ContactCard = () => {
  const contact = [
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
      <ContactList />
    </div>
  )
}

export default ContactCard