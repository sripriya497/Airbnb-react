import React from 'react'
import star from '@/assets/Star.png'
import bullet from '@/assets/Ellipse.png'
export default function Carousel(props){
    return(
            <div className='carousel-section'>
                <img src={props.image} width='176px' height='235px' className='image-carousel' />
                <div className='stats'>
                    <img src={star} className='image-star'/>
                    <span>{props.rating}</span>
                    <span className='grey'>({props.numOfReviews}) </span>
                    <img src={bullet} />
                    <span className='grey'>{props.country}</span>
                </div>
                <h2>{props.content}</h2>
                <p><span className='bold'>From ${props.price}</span> / person</p>
            </div>
    )
}