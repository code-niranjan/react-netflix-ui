import React from 'react'
import './ReasonToJoin.css'

export const JoinCard = (props) => {
  return (
    <>
    <div className="join-small-box">
        <div className="join-small-box-title">{props.title}</div>
        <div className="join-small-box-image">
            <img src={props.source} alt="" />
        </div>
    </div>
    </>
  )
}
