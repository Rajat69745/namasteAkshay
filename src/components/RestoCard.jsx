import React from 'react'

import { CDN_URL } from '../utils/constants'


const RestoCard = (props) => {

  const { resData } = props


  return (

     
    <div className='w-60 h-80  '>
      <img  className='h-[55%] w-[100%]  rounded-lg ' src={CDN_URL + resData.info.cloudinaryImageId} alt="" />


      <div >


        <h3 className='font-bold py-2  text-gray-800'>{resData.info.name}</h3>


        <h4 className='font-bold text-gray-800 flex items-center' > <svg className='h-5' fill="green" stroke="black" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
</svg>{resData.info.avgRating}   {resData.info.sla.deliveryTime} mins</h4>

     
        <h5 className='text-gray-500'>{resData.info.cuisines.join(" , ")}</h5>
        <p  className='text-gray-500'>{resData.info.areaName}</p>
        <h6></h6>
      </div>

    </div>
    
  )
}
export default RestoCard


export const withPromotedLabel=(RestoCard)=>{
//HOC takes component and returns modified / enhanced component
  return (props)=>{ 

     return   <div>
  


      <label className='absolute bg-black text-white  px-2 py-1 rounded-lg'>{props.resData.info.availability.opened? <p>open</p> : <p>close</p>}</label>
      <RestoCard {...props} />
    </div>

  }
}