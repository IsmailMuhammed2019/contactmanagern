import React from 'react'

const ContactList = (props) => {
        const {contacts} = props
  return (
    <div className='ui celled list'>
    {contacts.map((contact) => {
        const {id, name, email} = contact
        return(
            <div className='item' key={id}>
            <div className='content'>
                <div className='header'>{name}</div>
                <div>{email}</div>
            </div>
            <i className='trash alternate outline icon'></i>
        </div>
        )
    })
    }
    </div>
  )
}

export default ContactList