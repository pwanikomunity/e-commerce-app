import React, { useState } from 'react'
import Categories from './Categories'
import './Categories.css'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { green } from '@mui/material/colors';

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
    <section className='ml-[25%] flex space-x-[1rem]'>
    <div className='border h-[3rem] p-[0.5rem]'>
   < MenuOutlinedIcon fontSize="large"  />
    </div>
    <div className='flex h-[3rem] w-[50%] border border-yellow-900 mb-[1rem]'>
      <input className='w-[100%] h-[100%] text-center' placeholder='search products'/>
    </div>
    </section>


    <div className=" flex justify-between mb-[1rem]">
            <button className=' btn-primary w-[5rem]' onClick={() => setData(Categories)}>All</button><br />
            <button className=' btn-primary  w-[5rem]' onClick={() => filterItems('Men')}>Men</button><br />
            <button className=' btn-primary  w-[5rem] ' onClick={() => filterItems('women')}>Women</button><br />
            <button className=' btn-primary  w-[5rem]' onClick={() => filterItems('children')}>Children</button><br />
            <button className=' btn-primary   w-[5rem]' onClick={() => filterItems('Phones')}>Phones</button><br />
            <button className=' btn-primary   w-[5rem]' onClick={() => filterItems('Home appliances')}>Appliances</button><br />
            <button className=' btn-primary  w-[5rem]' onClick={() => filterItems('Computers')}>Computers</button><br />
            <button className=' btn-primary  w-[5rem]' onClick={() => filterItems('Sportswear')}>Sports </button><br />
          </div>
        
      <div className=''>
        <div className=" flex ">
          

          <div className="">
          
            <div className=" flex justify-between flex-wrap ">
              {data.map((values) => {
                const { id, title, price, about, image } = values;
                return (
                  
                    <div className=" border  ">
                      <div className="" key={id}>
                        <div className="rounded border shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
                          <div className='w-[15rem] h-[16rem]'>
                          <img  className='w-[100%] h-[100%]' src={image} />
                          </div>
                          
                          <div className="  ">
                            <h4 className='text-[1rem]'>{title}</h4>
                            <p className='font-bold'>K sh {price}</p>
                            <p className='text-[1rem]'>{about}</p>
                            <button className=' btn-primary h-[3rem]'>ADD TO CART</button>
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
