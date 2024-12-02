
import React from 'react'
import './ReasonToJoin.css'
import { JoinCard } from './JoinCard'

import heart_hand from '/src/images/heart_hand.png'
import handshake from '/src/images/handshake.png'
import heart from '/src/images/heart.png'
import television from '/src/images/television.png'

export const ReasonToJoin = () => {
  return (
    <>
    <div id='join' className="join">T
        <div className="join-heading">More reasons to join</div>
        <div className="join-outline-box">
                <JoinCard title='Stories tailored to your taste' source={heart_hand}/>
                <JoinCard title='Cancel or switch plans anytime' source= {handshake}/>
                <JoinCard title='A place just for kids' source= {heart}/>
                <JoinCard title="For your phone, tablet, laptop and TV" source={television}/>
        </div>
    </div>
    </>
  )
}
