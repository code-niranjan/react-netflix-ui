

import React from 'react'
import './Plan.css'
import { PlanCard } from './PlanCard'
import { PlanCardLast } from './PlanCardLast'
import './PlanCard.css'

const Plan = () => {
  return (
    <>
    <div id='plans' className="plan">

        <div className="plan-heading">A plan to suit your needs</div>
        <div className="plan-card">
          <PlanCard title="Mobile" quality="480p" value={{one:'Fair video quality',two:'For your phone or tablet'}} price='$149 /mo'/>
          <PlanCard title='Basic' quality="720p" value={{one:'Good video quality',two:'For your phone tablet, laptop and TV'}} price='$199 /mo'/>
          <PlanCard title="Standard" quality="1080p" value={{one:"Great video quality",two:"For your phone tablet "}}  price='$499 /mo'/>
          <PlanCardLast/>
        </div>
    </div>
    </>
  )
}

export default Plan