import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import tiffatron from "../img/tiffatron.jpg"
import royallda from "../img/royallda.avif"
import primates from "../img/primates.webp"
import downpour from "../img/downpour.avif"
import isolated from "../img/isolated.avif"


const data = [
  {
    id:1,
    NFTName: 'tiffatronn editions',
    NFTPrice: 'Floor: 0.75 ETH',
    NFTPhoto: tiffatron
  },
  {
    id:2,
    NFTName: 'The Chainsmokers - So Far So Good',
    NFTPrice: 'Floor: 0.11 ETH',
    NFTPhoto: royallda
  },
  {
    id:3,
    NFTName: 'Primates',
    NFTPrice: 'Floor: 13.99 SOL',
    NFTPhoto: primates
  },
  {
    id:4,
    NFTName: 'Downpour:Editions',
    NFTPrice: 'Floor: 0.03 ETH',
    NFTPhoto: downpour
  },
  {
    id:5,
    NFTName: 'John Divola Isolated Houses',
    NFTPhoto: isolated
  },
]

const Carousel = () => {
  return (
    <div className='bg-white'>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={4}
      navigation
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      { data.map( NFT => (
        <SwiperSlide key = {NFT.id} className='slide'>
        <div className='slide-content' style={{
          marginTop: "75px",
          marginLeft:"30px",
          alignItems: 'center',
          justifyContent:"center",
          display:"flex",
          textAlign:"center",
          fontWeight:"700", 
          color:"black"
        }}>
          <div className='NFT-image absolute-center'>
            <div className='card-inner-wrapper' style={{boxShadow:"rgb(0 0 0 / 15%) 16px 0px 16px", borderRadius:"12px", width:"95%"}}>
            <div className='card-content'>
              <img src={NFT.NFTPhoto} alt="" style={{
                fontSize: "20px",
                borderTopLeftRadius:"12px",
                borderTopRightRadius:"12px"
              }}/>
              <div className='nftname' style={{          
                fontSize: "15px"
              }}>{NFT.NFTName}</div>
              <div className='nftprice' style={{

                fontSize: '15px',
              }}>{NFT.NFTPrice}</div>
            </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      ))}
    </Swiper>
    </div>
    
  )
}

export default Carousel