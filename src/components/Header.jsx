import React from 'react'

const Header = () => {

  const headerStyle ={
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '2rem',
    marginBottom: '2rem',
    textTransform: 'uppercase'
  }

  return (
    <div className='ui fixed menu'>
        <div className='ui container center'>
            <h2 style={headerStyle}>Contact Manager</h2>
        </div>
    </div>
  )
}

export default Header