import React from 'react'
import NormalProducts from '../Components/static/NormalProducts'
import TwoBanner from '../Components/static/TwoBanner'

const Category = () => {
  return (
    <>
      <div className='Category_Heading mt-5'>
        <p className='title'>Thoughtfully Curated Gifts</p>
        <button>view all</button>
      </div>
      <TwoBanner />
      <NormalProducts />
      
    </>
   )
}

export default Category