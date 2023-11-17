import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Categories from './Product/Categories';
export default function Couresel() {
  
// Set the interval for automatic scrolling (in milliseconds)
const interval = 3000; // Change this value to adjust the interval

  return (
    <div className='mt-[2rem] flex ml-[4.5rem]'>
      <section className='w-[20%] '>
      <h1 className='text-white text-[3rem] '>
        Your Shopping Experience Made Easy
      </h1>
      
    
      </section>
      
      <Carousel autoPlay infiniteLoop interval={interval} showArrows={false} showStatus={false} showThumbs={false} className='w-[50%] pb-[2rem]'>
      {Categories.slice(0,5).map((product, index) => (
        <div key={index} className="w-[100%] h-[50vh]  flex items-center justify-center">
          <img src={product.image} alt={product.title} className="object-cover w-[100%] h-[100%]" />
        </div>
      ))}
    </Carousel>
    </div>
  )
}
