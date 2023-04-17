import React from 'react'
import ContactCard from './ContactCard'


const ContactList = () => { 
  
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
    <div className='ui celled list'>
      <h2>Contact List</h2>
      <ContactCard contacts={contacts} />     
    </div>
  )
}

export default ContactList