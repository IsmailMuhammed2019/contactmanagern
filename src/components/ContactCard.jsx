import React from 'react'

const ContactCard = ({contact, clickHandler}) => {
  const {id, name, email} = contact
  return (
    <div className='item' >
            <div className='content' style={{marginTop: '0.2rem'}}>
            <div className='header'>{name}</div>
            <div>{email}</div>
            </div>
            <i className='trash alternate outline icon red' style={{cursor: 'pointer', float: 'right', marginBottom: '0.2rem'}} onClick={() => clickHandler(id)}></i>
          </div>
  )
}

export default ContactCard