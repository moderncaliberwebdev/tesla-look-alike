import React, { useEffect } from 'react'
import '../css/Sidebar.css'
import { useDispatch, useSelector } from 'react-redux'

const Sidebar = () => {
  const dispatch = useDispatch()

  const activateSidebar = useSelector((state) => state.activateSidebar)

  const closeHandler = () => {
    dispatch({ type: 'ACTIVATE_SIDEBAR', payload: false })
  }

  useEffect(() => {
    dispatch({ type: 'ACTIVATE_SIDEBAR', payload: false })
  }, [dispatch])

  return (
    <div
      className='sidebar'
      style={{
        width: activateSidebar.open
          ? window.matchMedia('(max-width: 600px)').matches
            ? '85vw'
            : '20vw'
          : '0',
      }}
    >
      <p className='sidebar__close' onClick={closeHandler}>
        X
      </p>
      <ul>
        <li className='sidebar__mobile'>MODEL S</li>
        <li className='sidebar__mobile'>MODEL X</li>
        <li className='sidebar__mobile'>MODEL 3</li>
        <li className='sidebar__mobile'>MODEL Y</li>
        <li className='sidebar__mobile'>SOLAR ROOF</li>
        <li className='sidebar__mobile'>SOLAR PANELS</li>
        <li className='sidebar__mobile'>SHOP</li>
        <li className='sidebar__mobile'>TESLA ACCOUNT</li>
        <li>EXISTING INVENTORY</li>
        <li>USED INVENTORY</li>
        <li>TRADE-IN</li>
        <li>CYBERTRUCK</li>
        <li>ROADSTER</li>
        <li>SEMI</li>
        <li>CHARGING</li>
        <li>POWERWALL</li>
        <li>COMMERCIAL SOLAR</li>
        <li>TEST DRIVE</li>
        <li>FIND US</li>
        <li>SUPPORT</li>
        <li>UNITES STATES</li>
      </ul>
    </div>
  )
}

export default Sidebar
