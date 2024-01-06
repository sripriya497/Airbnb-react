import React from 'react'
import Nav from '@/Components/Nav.jsx'
import Hero from '@/Components/Hero.jsx'
import Carousel from '@/Components/Carousel.jsx'
import image1 from '@/assets/image 12.png'
import image2 from '@/assets/wedding-photography 1.png'
import image3 from '@/assets/mountain-bike 1.png'
export default function App() {
  return(
    <div classname = 'app_container'>
      <Nav />
      <Hero />
      <div className = 'carousel-row'>
        <Carousel 
            image = {image1}
            rating = {5.0}
            numOfReviews = {6}
            country = 'USA'
            content = 'Life Lessons with Katie Zaferes'
            price = {136}
        />
        <Carousel
            image = {image2}
            rating = {5.0}
            numOfReviews = {30}
            country = 'USA'
            content = 'Learn wedding photography'
            price = {125}
        />
        <Carousel
            image = {image3}
            rating = {4.8}
            numOfReviews = {2}
            country = 'USA'
            content = 'Group Mountain Biking'
            price = {50}
        />
      </div>
    </div>
  );
}


