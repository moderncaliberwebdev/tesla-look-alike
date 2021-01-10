import React from 'react'
import '../css/ProductItem.css'

const ProductItem = ({
  title,
  subtitle,
  buttonPrimary,
  buttonSecondary,
  image,
  productNum,
}) => {
  return (
    <div
      className='productItem'
      id='productItem'
      style={{
        backgroundImage: `url("/public/images/${image}")`,
        backgroundSize: image === 'charger.jpg' ? '50%' : 'cover',
        backgroundColor: image === 'charger.jpg' && '#f7f7f7',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'normal',
      }}
    >
      <div className='productItem__title'>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
      </div>

      <div className='productItem__buttons'>
        <button className='productItem__buttons_primary'>
          {buttonPrimary}
        </button>
        {buttonSecondary && (
          <button className='productItem__buttons_secondary'>
            {buttonSecondary}
          </button>
        )}
      </div>
    </div>
  )
}

export default ProductItem
