import React from 'react'
import { CDN_URL } from '../utils/constants'

const RestoItemsList = ({itemCards}) => {

 
  console.log(itemCards)
  return (
    <div>
      {
        itemCards.map((el)=>(
          <div key={el.card.info.id}>

            <div className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'> 
              

              <div>      

              <div className='p-2'>   
              <span>
              
              
              {el.card.info.name}
              </span>
              
              <span className='ml-2'>
              
              
                 ₹ {el.card.info.price/100 || el.card.info.defaultPrice/100 }
              </span>
              </div>
              <p className=' text-slate-400 text-sm' >{ el.card.info.description}</p>

              </div>
              
          

              
              <div className='w-[30%]  flex justify-end'>

<img className='w-36  p-3' src={CDN_URL+el.card.info.imageId} alt="" />
 
 <button className='absolute mt-20 mr-10 bg-black px-3 text-white  shadow-lg  rounded-lg'>Add+</button>
</div>
              </div>

          </div>
        ))
      }
    </div>
  )
}

export default RestoItemsList