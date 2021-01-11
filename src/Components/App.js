import React, { useEffect } from 'react'
import '../css/App.css'

import { useSelector } from 'react-redux'

import Header from './Header'
import ProductItem from './ProductItem'
import Sidebar from './Sidebar'

function App() {
  const activateSidebar = useSelector((state) => state.activateSidebar)
  const { open } = activateSidebar

  return (
    <div>
      <Sidebar />
      <div className='main' style={{ opacity: open && '70%' }}>
        <Header />
        <div className='productItems'>
          <ProductItem
            title='Lowest Cost Solar Panels in America'
            subtitle='Money-back guarantee'
            buttonPrimary='ORDER NOW'
            buttonSecondary='LEARN MORE'
            image='house.jpg'
          />
          <ProductItem
            title='Model S'
            subtitle='Starting at $69,420'
            buttonPrimary='CUSTOM ORDER'
            buttonSecondary='EXISTING INVENTORY'
            image='models.jpg'
          />
          <ProductItem
            title='Model 3'
            subtitle='Order Online for Touchless Delivery'
            buttonPrimary='CUSTOM ORDER'
            buttonSecondary='EXISTING INVENTORY'
            image='model3.jpg'
          />
          <ProductItem
            title='Model X'
            subtitle='Order Online for Touchless Delivery'
            buttonPrimary='CUSTOM ORDER'
            buttonSecondary='EXISTING INVENTORY'
            image='modelx.jpg'
          />
          <ProductItem
            title='Model Y'
            subtitle='Order Online for Touchless Delivery'
            buttonPrimary='CUSTOM ORDER'
            buttonSecondary='EXISTING INVENTORY'
            image='modely.jpg'
          />
          <ProductItem
            title='Solar for New Roofs'
            subtitle='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
            buttonPrimary='ORDER NOW'
            buttonSecondary='LEARN MORE'
            image='solarpanel.jpg'
          />
          <ProductItem
            title='Accessories'
            subtitle=''
            buttonPrimary='SHOP NOW'
            image='charger.jpg'
          />
        </div>
      </div>
    </div>
  )
}

export default App
