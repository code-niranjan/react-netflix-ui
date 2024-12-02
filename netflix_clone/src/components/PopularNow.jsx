import React from 'react'
import './PopularNow.css'
import { Card } from './Card'
import {useRef, useState} from 'react'
import t_card_one from '/src/images/AAAABdls6Q-D6yHPnpXtbdREq1tLeOdOnwjpvUwR41ee_GHktj0S6Jy_Zj7YRt8nnnVrilG4NKs0w9cojnfqP-cApewfTLpxEpcolPAu6YW87Vx5U6wzFT3kpi5-MVGbA9aBdt1V2A.webp'
import t_card_two from '/src/images/AAAABcOKVyDpoMqPMP8MRuASK8X0SenR-HIJphcwID5xC0PuCdn3p618nTL6h1n78t_ZpIA1aICPE6_D6_9nRHPnvAJUNf3aPy-W5hxfvjJpkqTovjtMJbt-2PSq0JjxnS9pS5xPJQ.webp'
import t_card_three from '/src/images/AAAABSJTwCRepT3hij8CAbXVf-kGcmJ1rIVtD7wT2AmGY4nhIP6GyADv7jWfWR1B1MwfeAu3RuNdlyQNmYx50sACOm24YSD_biqKtHhJ.webp'
import t_card_four from '/src/images/AAAABTDVDAaF8irUSwjeVkDpRR6dsVfiDVtp0GmxTq2OHuVPO6xTtVXZCYb3PUWImTW5_lhb4RzLyRo_gCNAGVBeBHBu9KFQGcP6BLthQArNiEtPu4BQB14k710nTLaATi3IS35pug.webp'
import t_card_five from '/src/images/AAAABWufSYoSh-ruSGRpzD_7k6m6nRPshhSVJsXf4vbq85zHVXCcIoAkKQZar1cVG79qU-aRQsBBdw37WOofOVDuLolhtQMGb6kklOlk.webp'
import t_card_six from '/src/images/AAAABV13Tub85_uTNQNf6fN3SYm8kNLYz8OyyS6mDAlAza9C-ftN7Y9qAMp8Fbb1oeYamN3Dn37QuOdBqrKTwD5dAuuEMJpHRm2vZeHz.webp'
import t_card_seven from  '/src/images/AAAABd3f1fqaLSCBm2gzSnx0E5IjyK85McDa89ra77Z8W0eIvL2QwhAjWuP3GJ9gHVn5wyCKiXK8n2J16fmfgES9XZFRQFtSyuDiM3YJ.webp'
import t_card_eight from  '/src/images/AAAABZsOR8kKO5yZ6u3uTrB2c-dCUtBrlbIQPxnufqB02CjoKVRO6B5rd1hkGKFmlpI49KXypCl-brJaecSBCflRkdcYr89yFjc3MCWJD0PikZAQs2yb4z1q_2sV0tS5vbwa97Ezqg.webp'
import t_card_nine from  '/src/images/AAAABbQBo_zWfdUcoE4_Lr9ZtEEmslwCCxIspjPmpzWHGvCQ_ouuYOp4LFDfDa6Dvo5J1uChPXfw2C1lbyd1vGz-YPGnzBFOHw0nlrRQ.webp'
import t_card_ten from  '/src/images/AAAABdgTaBYCIB0eUZCFao0FYJoVkDyIb3sB6kOeRP1VfyY5eroA4xyfl2ajD0Lrn2Ury49eGUlr_86M3kHkjGEYCIKfB8j-ZqVfFmbV.webp'


export const PopularNow = () => {
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
        <div className="popular-show-heading">Trending Now</div>
        <div className={`whole-box ${scrollAmount === 0 ? 'scroll-end' : 'scroll-start'}`}>
          <div className={`${scrollAmount!==0 ? 'popular-button':'popular-button-hide'} `}><button onClick={()=>handleScroll('left')}><i className="fa-solid fa-angle-left"></i></button></div>
          <div className="all-card-box" ref={scrollContainerRef}>
            <Card source={t_card_one} />
            <Card source={t_card_two} />
            <Card source={t_card_three} />
            <Card source={t_card_four} />
            <Card source={t_card_five} />
            <Card source={t_card_six} />
            <Card source={t_card_seven} />
            <Card source={t_card_eight} />
            <Card source={t_card_nine} />
            <Card source={t_card_ten} />
          </div>
          <div className={`${scrollAmount===0 ? 'popular-button':'popular-button-hide'}`}><button onClick={()=>handleScroll('right')}> <i className="fa-solid fa-angle-right"></i></button></div>
        </div>

      </div>
    </>
  )
}
