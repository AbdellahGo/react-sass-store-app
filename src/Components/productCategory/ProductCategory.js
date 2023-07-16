import React from 'react'

const ProductCategory = () => {
  return (
    <div className='categorys'>
      <div className='container'>
        <div className='parent-category'>
          <div className='category'>
            <div className='content'>
              <span>SALE UP TO 50%</span>
              <h4>arm chair</h4>
            </div>
            <div className='image'>
              <img src={require('../../images/banner1-v1.jpg')} />
            </div>
          </div>
          <div className='category'>
            <div className='content'>
              <span>SPECIAL DEALS</span>
              <h4>dining table</h4>
            </div>
            <div className='image'>
              <img src={require('../../images/banner2-v1.jpg')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCategory