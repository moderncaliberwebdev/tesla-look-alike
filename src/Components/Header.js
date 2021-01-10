import React from 'react'
import '../css/Header.css'

const Header = () => {
  return (
    <div className='header'>
      <h3>TESLA</h3>
      <ul className='header__products'>
        <li>MODEL S</li>
        <li>MODEL 3</li>
        <li>MODEL X</li>
        <li>MODEL Y</li>
        <li>SOLAR ROOF</li>
        <li>SOLAR PANELS</li>
      </ul>
      <ul className='header__options'>
        <li>SHOP</li>
        <li>TESLA ACCOUNT</li>
        <img
          src='/public/images/menu.png'
          alt='Menu Bar'
          className='header__menuImg'
        />
      </ul>
    </div>
  )
}

export default Header
