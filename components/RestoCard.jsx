import React from 'react'
import './RestoCard.css'
const RestoCard = (props) => {

   const {resData}=props

   console.log(resData)
  const imgId="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
  return (
    <div className='restoCard' >
<img src={imgId+resData.info.cloudinaryImageId} alt="" /> 

 
 <div className='resDetails'>
 <h3>{resData.info.name}</h3>
        <h4>Rating {resData.info.avgRating}</h4>

        <h5>{resData.info.cuisines.join(" , ")}</h5>
        <p>{resData.info.sla.deliveryTime} mins</p>
 </div>
      
    </div>
  )
}

export default RestoCard