import React, {useState} from 'react'
import AddContact from './AddContact'
import ContactList from './ContactList'

const ContactCard = () => {
  const [person, setPerson] = useState({name: '', email: ''})
  const [people, setPeople] = useState([])
  return (
    <div>
      <AddContact />
    </div>
  )
}

export default ContactCard