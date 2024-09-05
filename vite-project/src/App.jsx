import React from 'react'
import './App.css'
import Feature1 from './components/Feature1'
import Feature2 from './components/Feature2'
import Feature3 from './components/Feature3'
import Search from './components/Search'
import SearchedForPokemon from './components/SearchedForPokemon'
import {useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, EffectCube, Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import { SpeedInsights } from "@vercel/speed-insights"
export default function App() {
  const [data, setData] = useState('')
 
    return (
      <>
     
        <Search setData={setData}/>
                {/* <div id='gallery'>
                    <Feature1/>
                    <Feature2/>
                    <Feature3/>
                    <SearchedForPokemon data={data}/>
                </div> */}
        <Swiper
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: .94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination, Autoplay]}
          className="mySwiper"
          >
          <SwiperSlide id='slide-one'>
          <Feature1/>
          </SwiperSlide>
          <SwiperSlide id='slide-two'>
            <SearchedForPokemon data={data}/>
        </SwiperSlide>
        <SwiperSlide id='slide-three'>
          <Feature2/>
        </SwiperSlide>
        <SwiperSlide id='slide-four'>
          <Feature3/>
        </SwiperSlide>
      </Swiper>
       <SpeedInsights/>
      </>
    )
}


