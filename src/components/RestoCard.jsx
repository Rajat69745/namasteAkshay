import React from 'react'

import { CDN_URL } from '../utils/constants'


const RestoCard = (props) => {

  const { resData } = props


  return (

     
    <div className='w-60 h-80 shadow-md rounded-lg hover:shadow-xl '>
      <img  className='h-[55%] w-[100%]  rounded-tr-lg rounded-tl-lg' src={CDN_URL + resData.info.cloudinaryImageId} alt="" />


      <div >


        <h3 className='font-bold py-4'>{resData.info.name}</h3>
        <h4>Rating {resData.info.avgRating}</h4>

     
        <h5>{resData.info.cuisines.join(" , ")}</h5>
        <p>{resData.info.areaName}</p>
        <h6>{resData.info.sla.deliveryTime} mins</h6>
      </div>

    </div>
    
  )
}
export default RestoCard


export const withPromotedLabel=(RestoCard)=>{
//HOC takes component and returns modified / enhanced component
  return (props)=>{ 

     return   <div>
  


      <label className='absolute bg-black text-white  px-2.5 py-1 rounded-lg'>{props.resData.info.availability.opened? <p>open</p> : <p>close</p>}</label>
      <RestoCard {...props} />
    </div>

  }
}