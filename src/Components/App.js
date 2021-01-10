import React from 'react'
import '../css/App.css'

import ProductItem from './ProductItem'

import Header from './Header'

function App() {
  return (
    <div>
      <Header />
      <div className='items'>
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
  )
}

export default App
