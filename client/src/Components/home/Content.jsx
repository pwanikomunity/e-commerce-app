import React from 'react'
import Categories from '../Product/Categories'

export default function Content() {
  return (
    <section className='ml-[4.5rem]'>
        <h1 className='text-white text-[2rem] mb-[2rem]'>Top Deals E-commerce -buy/sell</h1>
        <section className='flex flex-wrap bg-white  p-[1rem] justify-between'>
            {Categories.slice(5,12).map((product,key)=>{
                return(<div key={product.Id}>
                    <div className='w-[10rem] h-[10rem]'>
                        <img  src={product.image}  className='object-cover w-[100%] h-[100%] border-none' alt={product.title}/>
                    </div>
                    <div><p>{product.title}</p></div>
                    <div><p className='font-bold'> K SH {product.price}</p></div>
                    <div><p>{product.category}</p></div>
                

                </div>)
            })}
        </section>
    </section>
  )
}
