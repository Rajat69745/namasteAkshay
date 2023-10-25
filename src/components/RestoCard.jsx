import React from 'react'
import './RestoCard.css'
import { CDN_URL } from '../utils/constants'


export default RestoCard = (props) => {

  const { resData } = props


  return (
    <div className='restoCard' >
      <img src={CDN_URL + resData.info.cloudinaryImageId} alt="" />


      <div className='resDetails'>


        <h3>{resData.info.name}</h3>
        <h4>Rating {resData.info.avgRating}</h4>

     
        <h5>{resData.info.cuisines.join(" , ")}</h5>
        <p>{resData.info.areaName}</p>
        <h6>{resData.info.sla.deliveryTime} mins</h6>
      </div>

    </div>
  )
}

