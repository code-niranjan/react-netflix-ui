
import React from 'react'
import './Hero.css'
export const Hero = () => {
  return (
    <>
      <svg width="0" height="0">
        <defs>
          <clipPath id="properCircularConcaveArc" clipPathUnits="objectBoundingBox">

            <path d="M 0 0 H 1 V 0.99 Q 0.5 0.9 0 0.99 Z" />
          </clipPath>
        </defs>
      </svg>
      <div
        className="hero"
        style={{ clipPath: 'url(#properCircularConcaveArc)' }}
      >
        <div className="hero-text">
          <div className="hero-text-one">Unlimited movies, TV </div>
          <div className="hero-text-two">shows and more</div>
          <div className="hero-text-three">Starts at $149. Cancel at any time.</div>
        </div>
      </div>

    </>


  )
}
