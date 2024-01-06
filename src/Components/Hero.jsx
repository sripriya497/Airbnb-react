import React from 'react'
import grid_image from '@/assets/Group 77.png'

export default function Hero() {
    return(
        <hero className='hero-section'>
            <img src = {grid_image} width = '395.91px' height = '232px' className='hero-grid'/>
            <h1 className='hero-heading'> Online Experiences </h1>
            <p className='hero-content'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </hero>
    )
}
