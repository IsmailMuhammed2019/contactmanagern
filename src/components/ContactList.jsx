import React from 'react'

const ContactList = (props) => {
        const {contacts} = props
  return (
    <div className='ui celled list'>
      <h2 style={{marginTop:'2rem'}}>Contact List</h2>
    {contacts.map((contact) => {
        const {id, name, email} = contact
        return(
            <div className='item' key={id} style={{display: 'table', width: '100%'}}>
            <div className='content' style={{marginTop:'1rem', marginBottom:'1rem'}}>
                <div className='header'>{name}</div>
                <div>{email}</div>
            </div>
            <i className='trash alternate outline icon red' style={{verticalAlign: 'middle'}}></i>
        </div>
        )
    })
    }
    </div>
  )
}

export default ContactList