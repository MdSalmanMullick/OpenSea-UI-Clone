import React from 'react'
import Carousel from './Carousel'


const Feed = () => {
  return (
    <div>
      <div className='font-bold' style={ { paddingTop: "25px", fontSize: "35px", fontWeight: "bold", background: 'linear-gradient(90deg, rgba(235,235,235,1) 0%, rgba(175,233,242,1) 27%, rgba(231,199,229,1) 98%)', alignItems:"center", justifyContent:"center", display:"flex"} }>Explore, collect, and sell NFTs</div>
      <div>
        <Carousel />
      </div>
    </div>
  )
}

export default Feed