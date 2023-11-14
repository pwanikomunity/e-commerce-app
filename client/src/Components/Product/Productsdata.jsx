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
      <h1 className='text-center text-info  text-sky-500 dark:text-sky-400'>Happy Shopping</h1>
      <div className='container-fluid mx-2'>
        <div className="row mt-5 mx-2 flex ">
          <div className="col-md-6 ">
            <button className='btn btn-primary h-8  mb-4' onClick={() => setData(Categories)}>All</button><br />
            <button className='btn btn-primary h-8 mb-4' onClick={() => filterItems('Men')}>Men</button><br />
            <button className='btn btn-primary h-8 mb-4' onClick={() => filterItems('women')}>Women</button><br />
            <button className='btn btn-primary h-8 mb-4' onClick={() => filterItems('children')}>Children</button><br />
            <button className='btn btn-primary h-8 mb-4' onClick={() => filterItems('Phones')}>Phones</button><br />
            <button className='btn btn-primary h-8 mb-4' onClick={() => filterItems('Home appliances')}>Home Appliances</button><br />
            <button className='btn btn-primary h-8 mb-4' onClick={() => filterItems('Computers')}>Computers</button><br />
            <button className='btn btn-primary h-8 mb-4' onClick={() => filterItems('Sportswear')}>Sports Wears</button><br />
          </div>
          <div className="col-md-9 m-20">
            <div className="grid grid-cols-3  ">
              {data.map((values) => {
                const { id, title, price, about, image } = values;
                return (
                  <>
                    <div className="grid grid-cols-3 mb-4 w-400">
                      <div className="card-wrapper w-450 mx-w-455" key={id}>
                        <div className="card w-450 min-w-250 bg-white p-4 rounded border border-gray-300 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
                          <img src={image} className='card-img-top' alt={`Card ${id}`} />
                          <div className="card-body">
                            <h4 className='card-title'>{title}</h4>
                            <p>{price}</p>
                            <p className='card-text'>{about}</p>
                            <button className='btn btn-primary'>ADD TO CART</button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </>
                )
              })}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
