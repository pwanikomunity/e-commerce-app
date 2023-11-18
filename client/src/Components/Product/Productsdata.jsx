import React, { useContext, useState } from 'react'
import Categories from './Categories'
import './Categories.css'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { ShopContext } from '../../Context/Cart-context';

export const Productsdata = () => {
  
  const [query,setQuery]=useState("")
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
      <input className='w-[100%] h-[100%] text-center' placeholder='search products' onChange={(e)=>setQuery(e.target.value)} />

    </div>
    </section>


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
            {Categories.filter((data)=>
         data.category.toLowerCase().includes(query)
              ).map((values) => {
                const { Id, title, price, about, image } = values;
                
                const {addToCart, cartItems}=useContext(ShopContext)
                const cartItemsAmout= cartItems[Id];
                return (
                  
                    <div className="   " key={Id}>
                      <div className="" key={Id}>
                        <div className="rounded border shadow-md hover:scale-105 transition-transform duration-300 ease-in-out ml-10 mb-20 p-1" key={Id}>
                          <div className='w-[15rem] h-[15rem]'>
                          <img  className='w-[100%] h-[100%] object-cover' src={image} />
                          </div>
                          
                          <div className="  ">
                            <h4 className='text-[1rem]'>{title}</h4>
                            <p className='font-bold'>Ksh {price}</p>
                            <p className='text-[1rem] w-[14rem]'>{about}</p>
                            <button className=' btn-primary h-[3rem] ' onClick={()=>addToCart(Id)} >ADD TO CART  {cartItemsAmout > 0 && <>({cartItemsAmout} )</>} </button>
                           
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


// import React, { useState } from 'react';
// import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
// import { Categories } from './Categories'; // Assuming Categories is imported from an external file
// import './Categories.css';
// import { CartProvider } from '../Cart/Cart-context';
// import Cart from '../Cart/Cart';


// const Productsdata = () => {
//   const [query, setQuery] = useState('');
//   const [data, setData] = useState(Categories);

//   const filterItems = (catItems) => {
//     const result = Categories.filter((curData) => {
//       return curData.category === catItems;
//     });
//     setData(result);
//   };

//   return (
//     <CartProvider>
//       <>
//         <section className='ml-[25%] flex space-x-[1rem]'>
//           <div className='border h-[3rem] p-[0.5rem]'>
//             <MenuOutlinedIcon fontSize="large" />
//           </div>
//           <div className='flex h-[3rem] w-[50%] border border-yellow-900 mb-[1rem]'>
//             <input
//               className='w-[100%] h-[100%] text-center'
//               placeholder='search products'
//               onChange={(e) => setQuery(e.target.value)}
//             />
//           </div>
//         </section>

//         <div className="col-md-3 mt-[1rem] mb-[1rem] pl-[8rem] pr-[8rem]">
//           {/* ... (your existing code for category buttons) */}
//         </div>

//         <div className='p-[8rem]'>
//           <div className="flex">
//             <div className="">
//               <div className="flex justify-between flex-wrap">
//                 {data.filter((data) => data.category.toLowerCase().includes(query)).map((values) => {
//                   const { id, title, price, about, image } = values;
//                   return (
//                     <div className="" key={id}>
//                       <div className="rounded border shadow-md hover:scale-105 transition-transform duration-300 ease-in-out ml-10 mb-20 p-1" key={id}>
//                         <div className='w-[15rem] h-[15rem]'>
//                           <img className='w-[100%] h-[100%] object-cover' src={image} alt={title} />
//                         </div>

//                         <div className="  ">
//                           <h4 className='text-[1rem]'>{title}</h4>
//                           <p className='font-bold'>K sh {price}</p>
//                           <p className='text-[1rem] w-[14rem]'>{about}</p>
//                           <CartButton id={id} title={title} price={price} />
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Integrate the Cart component */}
        
//       </>
//     </CartProvider>
//   );
// };

// export default Productsdata;
