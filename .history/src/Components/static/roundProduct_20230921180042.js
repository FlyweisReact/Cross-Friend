import React from 'react'

const RoundProduct = ({data}) => {
  return (
    <div className='round-product-container'>
    {data?.map((i , index) => (
        <div className='Main' key={index} >
            <img src='/Image/54.png' alt='' />
            <p className='title'> {i} </p>
        </div>
    ))}
       
    </div>
  )
}

export default RoundProduct