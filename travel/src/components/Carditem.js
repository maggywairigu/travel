import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
    <>
    <li className='cardsitem'>
        <Link className='cardsitemlink' to={props.path}>
            <figure className='cardsitempicwrap' data-category={props.label}>
                <img src={props.src} className='carditemimg'></img>
            </figure>
             <div className='carditeminfo'>
                <h5 className='carditemtext'>{props.text}</h5>
             </div>
        </Link>
    </li>
    </>
  )
}

export default CardItem