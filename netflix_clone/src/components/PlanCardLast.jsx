
import React from 'react'
import './PlanCard.css'


export const PlanCardLast = () => {
  return (
    <>
    
    <div className="plan-last-card-box">
                <div className="plan-card-box-one">
                    <div className="plan-card-heading">Premium</div>
                    <div className="plan-card-quality">4K + HDR</div>
                    <div className="plan-card-provided">
                        <div className="plan-card-value">
                            <i class="fa-solid fa-check"></i>
                            <div>Best video quality</div>
                        </div>
                        <div className="plan-card-value">
                            <i class="fa-solid fa-check"></i>
                            <div>Immersive sound (spatial audio)</div>
                        </div>
                        <div className="plan-card-value">
                            <i class="fa-solid fa-check"></i>
                            <div>For your phone, tablet, laptop and TV</div>
                        </div>
                    </div>
                </div>
                <div className="plan-card-box-two">
                    <div className="plan-card-price">$649 /mo</div>
                </div>
            </div>
    </>
  )
}
