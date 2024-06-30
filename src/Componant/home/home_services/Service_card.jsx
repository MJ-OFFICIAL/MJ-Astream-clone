import React from 'react'
import './Service_card.css'
import card_1 from '../../../assets/card_1.png'

const Service_card = (props) => {
  return (
    <div className='card'>
        <img src={props.icon} alt="" />
      <h2> {props.text}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam tempore possimus harum odit eveniet ducimus ipsum, eligendi autem sit eum?</p>
       
    </div>
  )
}

export default Service_card
