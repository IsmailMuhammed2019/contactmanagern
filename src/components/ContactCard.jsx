import React from 'react'
import User from '../assets/imgs/user.png'

const ContactCard = ({...contact}) => {
  const {id, name, email} = contact
  return (
    <div className='item' key={id} style={{display: 'flex'}}>
      <img src={User} alt={name} className='ui avatar image'/>
              <div className='content'style={{flexGrow: '2'}}>
                <h3 className='header'>{name}</h3>
                <p>{email}</p>
              </div>
              <i className='trash alternate outline icon red' style={{flexGrow: '1', height: 'auto', marginLeft: 'auto', marginRight: 'auto',
    writingMode: 'vertical-lr', cursor:'pointer'}}></i>
            </div>
  )
}

export default ContactCard