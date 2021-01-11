import React from 'react'
import '../css/Header.css'

import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()

  const clickHandler = () => {
    dispatch({ type: 'ACTIVATE_SIDEBAR', payload: true })
  }

  return (
    <div className='header'>
      <img src='public/images/tesla.png' alt='tesla' className='header__logo' />
      <ul className='header__products'>
        <li>MODEL S</li>
        <li>MODEL 3</li>
        <li>MODEL X</li>
        <li>MODEL Y</li>
        <li>SOLAR ROOF</li>
        <li>SOLAR PANELS</li>
      </ul>
      <ul className='header__options'>
        <li className='header__options__account'>SHOP</li>
        <li className='header__options__account'>TESLA ACCOUNT</li>
        <img
          src='public/images/menu.png'
          alt='Menu Bar'
          className='header__menuImg'
          onClick={clickHandler}
        />
      </ul>
    </div>
  )
}

export default Header
