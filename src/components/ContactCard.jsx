import React from 'react'

const ContactCard = (props) => {
    const {id, name, email} = props.contact
  return (
    <div className='item' key={id} style={{display: 'table', width: '100%'}}>
            <div className='content' style={{marginTop:'1rem', marginBottom:'1rem'}}>
                <div className='header'>{name}</div>
                <div>{email}</div>
            </div>
            <i className='trash alternate outline icon red' style={{verticalAlign: 'middle'}}></i>
        </div>
  )
}

export default ContactCard