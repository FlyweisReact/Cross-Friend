import React from 'react'
import TemplateCarousel from '../Components/Template/TemplateCarousel'
import ProductCarousel from '../Components/Template/ProductCarousel'

const Home = () => {
  return (
    <>
      <TemplateCarousel />
      
      <div className='multi-background-heading'>
          <p className='heading'>Cakes</p>
          <ProductCarousel />
          <button className='last'>View More</button>
        </div>
    </>
  )
}

export default Home