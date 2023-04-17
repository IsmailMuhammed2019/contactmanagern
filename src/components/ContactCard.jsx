import React from 'react'


const ContactCard = ({contacts}) => {
  
  return (
    <div>
      {contacts.map((contact) => {
        const {id, name, email} = contact
        return (
          <div key={id} className='item'>
            <div className='content'>
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

export default ContactCard 