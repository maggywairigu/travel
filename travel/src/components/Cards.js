import React from 'react'
import CardItem from './Carditem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC destinations!</h1>
        <div className='cardscontainer'>
            <div className='cardswrapper'>
                <ul className='cardsitems'>
                    <CardItem  src='/images/img-9.jpg' text="Explore the hidden waterfall deep inside the Amazon jungle." label='Adventure' path='/services' />
                    <CardItem  src='/images/img-2.jpg' text="Travel through the Islands of Bali in a private cruise." label='Luxury' path='/services' />
                    <CardItem  src='/images/img-3.jpg' text="Set sail in the Antlantic Ocean visiting Uncharted Waters." label='Mystery' path='/services' />
                    <CardItem  src='/images/img-4.jpg' text="Experience Football on Top of the Himalayan Mountains." label='Adventure' path='/products' />
                    <CardItem  src='/images/img-8.jpg' text="Ride through the Sahara Desert on a guided camel tour." label='Adrenaline' path='/sign-up' />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards