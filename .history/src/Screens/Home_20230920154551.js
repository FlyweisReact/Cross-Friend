import React from 'react'
import TemplateCarousel from '../Components/Template/TemplateCarousel'
import ProductCarousel from '../Components/'

const Home = () => {
  return (
    <>
      <TemplateCarousel />
      
      <div className='multi-background-heading'>
          <p className='heading'>Cakes</p>
          <ProductCarousel />
        </div>
    </>
  )
}

export default Home