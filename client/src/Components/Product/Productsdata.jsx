import React, { useState } from 'react'
import Categories from './Categories'
import './Categories.css'

export const Productsdata = () => {
  const [data, setData] = useState(Categories)
  const filterItems = (catItems) => {
    const result = Categories.filter((curData) => {
      return curData.category === catItems;
    });
    setData(result)
  }
  return (
    <>
    <div className='flex h-[3rem] ml-[25%] w-[50%] border border-yellow-900 mb-[1rem]'>
      <input className='w-[100%] h-[100%] text-center mb-15' placeholder='search products'/>
    </div>


    <div className=" flex justify-between mt-[1rem] mb-[1rem] pl-[8rem] pr-[8rem]">
            <button className=' btn-primary w-[5rem] ml-[2rem]' onClick={() => setData(Categories)}>All</button><br />
            <button className=' btn-primary  w-[5rem] ml-[2rem]' onClick={() => filterItems('Men')}>Men</button><br />
            <button className=' btn-primary  w-[5rem] ml-[2rem]' onClick={() => filterItems('women')}>Women</button><br />
            <button className=' btn-primary  w-[5rem] ml-[2rem]' onClick={() => filterItems('children')}>Children</button><br />
            <button className=' btn-primary   w-[5rem] ml-[2rem]' onClick={() => filterItems('Phones')}>Phones</button><br />
            <button className=' btn-primary   w-[5rem] ml-[2rem]' onClick={() => filterItems('shoes')}>Shoes</button><br />
            <button className=' btn-primary  w-[5rem] ml-[2rem]' onClick={() => filterItems('Computers')}>Computers</button><br />
            <button className=' btn-primary  w-[5rem] ml-[2rem]' onClick={() => filterItems('Sportswear')}>Sports </button><br />
          </div>
        
      <div className='p-[8rem]'>
        <div className=" flex ">
          

          <div className="">
          
            <div className=" flex justify-between flex-wrap ">
              {data.map((values) => {
                const { id, title, price, about, image } = values;
                return (
                  
                    <div className="   ">
                      <div className="" key={id}>
                        <div className="rounded border shadow-md hover:scale-105 transition-transform duration-300 ease-in-out ml-10 mb-20 p-1">
                          <div className='w-[15rem] h-[15rem]'>
                          <img  className='w-[100%] h-[100%] object-cover' src={image} />
                          </div>
                          
                          <div className="  ">
                            <h4 className='text-[1rem]'>{title}</h4>
                            <p className='font-bold'>K sh {price}</p>
                            <p className='text-[1rem] w-[14rem]'>{about}</p>
                            <button className=' btn-primary h-[3rem] '>ADD TO CART</button>
                          </div>
                        </div>
                      </div>
                    </div>

                  
                )
              })}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
