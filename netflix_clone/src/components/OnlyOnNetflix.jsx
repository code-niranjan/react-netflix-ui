import React from 'react'
import './PopularNow.css'
import { Card } from './Card'
import {useRef, useState} from 'react'

import on_card_one from '/src/images/AAAABRY13rE6hFZeP981fDAgmKTcN4P0SzIOzCS8PMVNcm1A41O8G1dqia0SGeBUzBvFiH3JX_ugRAq5nbRkhsb4FpQy6PLwZyRw5cTO7EjbrO8YX7-Pk2joGpoaBQYi6RwFo4p11Q.webp'
import on_card_two from  '/src/images/AAAABW-d7ZXaidP5ykOiy-MSmgy-yVF1C4_68_poOkx-ZU04wLVevpoqkf3uEvHCsGZY_XipOSlNASQ0TfqWvjspCLE5-2AIVHHQY29oJC62Yd8PhSLBaZqzreyhaAmAM6Z7YQBBMg.webp'
import on_card_three from  '/src/images/AAAABT4ecnnwn2CMi9BsnJKgbXWe-t4DkNA-M3HvcRHQKu56TAbFxQ2PUZr06MbFUUgPRBB2NLQGVrkIVfg63SDwFLntjd0y8TcbZeDHqYmhLlSrQSG6cK-7SKiCtzRR7LvxOcikfw.webp'
import on_card_four from  '/src/images/AAAABdbKfm_grERo569cMP2buiT-mBuh9jLLONiiVaYHGR6E6BeZyBjRUdPEDvy8j8ZcPU_yVwBM6pL1tNBFDyjoR93O6yfBk0pUGn8swBrdsmbLVKM3SfA6q_onC0QRpTVvFsDa3Q.webp'
import on_card_five from  '/src/images/AAAABROJMgHuT0kF6UHU-1PgR5T6_MyUWbqAN8a70TMKBaTV6TDEif7AKv6BARn67_U4ZlVx31vWny9ljXaa74-HLXs3UD35gcXbnUcT56Bk9uqrh9jsBYaP-FGfSV8COqgJIyrNEg.webp'
import on_card_six from  '/src/images/AAAABcBfQ5g7suBqQ1OfrnFBRfK_3cXnGqyVcpAOUM28hHX0mWh8kzzP0kCmrNZFszZ-GukuXVJiK8tGbw6f5AM4zaYYXYvmRk6hXQZrXxswq7c18th-3TvNDTSkG3_EKi-yaZWfQg.webp'
import on_card_seven from  '/src/images/AAAABcthhZIohsu0feEvCd4hCmcRUJ7wP3fSN1eBFLvYLO1E56hGa9dTJus3OZ8lyDSQxvaQNRgPWdZl58_S2BFIvPOEdJgKfhDatMWH8zOJRFTaukJ5FJRa1HutRInOIPCr6wsjLg.webp'
import on_card_eight from  '/src/images/AAAABQ26mhDTxFE58n5Cwgwe_ReId62_vwDTsFu8zNv9aO1OW6SWAbCeGIN_th8eHMv2sdDSY1rk6STdF7r2GGLshF5ID25njhBE0IeNcasFwPxHlF33NAPTXgZOCOX_NhMUGbXnBg.webp'
import on_card_nine from  '/src/images/AAAABW2q8lctBzSehk--VeICX0Bd_oige_Jj7UiphNNSvR8XnPanKly9YM2Seq_w_UZKO9BlM6FeaoVEIpjpp0iAJ3wUVT4JIC9VhbRqfuDvB75eYSpKHh9Thg7vFo93xdWjy9jCDA.webp'
import on_card_ten from   '/src/images/AAAABV4S0JtDH2OOTNxTXBzCvaWgBPHLTBlRMrSmTQONnPaa-Fzs0wqy5iH09TM5UaBdlFWsxieF-8DiUy39UOK_fiwlD-9juZUH4i5by2BWYK3jkU9dU-D4XQJTfkfa0CbRCfRrxg.webp'


export const OnlyOnNetflix = () => {
  const scrollContainerRef = useRef(null)
  const [scrollAmount,setScrollAmount]=useState(0)
 

  const handleScroll =(direction)=>{
    const container = scrollContainerRef.current;
    const scrollAmount= 1200
    if(direction==='left'){
      container.scrollBy({left:-scrollAmount,behavior:'smooth'})
      setScrollAmount(0)
    }else if(direction==='right'){
      container.scrollBy({left:+scrollAmount,behavior:'smooth'})
      setScrollAmount(1200)
    }
  }

  console.log(scrollAmount)


  return (
    <>
      <div id='popular-now' className="popular-now">
        <div className="popular-show-heading">Only on Netflix</div>
        <div className={`whole-box ${scrollAmount === 0 ? 'scroll-end' : 'scroll-start'}`}>
          <div className={`${scrollAmount!==0 ? 'popular-button':'popular-button-hide'} `}><button onClick={()=>handleScroll('left')}><i className="fa-solid fa-angle-left"></i></button></div>
          <div className="all-card-box" ref={scrollContainerRef}>
            <Card source={on_card_one} />
            <Card source={on_card_two} />
            <Card source={on_card_three} />
            <Card source={on_card_four} />
            <Card source={on_card_five} />
            <Card source={on_card_six} />
            <Card source={on_card_seven} />
            <Card source={on_card_eight} />
            <Card source={on_card_nine} />
            <Card source={on_card_ten} />
          </div>
          <div className={`${scrollAmount===0 ? 'popular-button':'popular-button-hide'}`}><button onClick={()=>handleScroll('right')}> <i className="fa-solid fa-angle-right"></i></button></div>
        </div>

      </div>
    </>
  )
}
