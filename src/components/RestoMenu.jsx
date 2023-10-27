import React from 'react'
import useRestoMenu from '../utils/useRestoMenu'
import RestoCategory from './RestoCategory'

const RestoMenu = () => {


    const resInfo= useRestoMenu()
   
  

if( resInfo===null) return <h1>loading</h1> 


    const {name,cuisines, costForTwoMessage}= resInfo.data?.cards[0]?.card?.card?.info
    const {itemCards}= resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card
  
    const categories= resInfo?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter((el)=>el.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    console.log(categories)
  

  
     

   // console.log(resInfo?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card)
  return (
    <div className='text-center'>
        <h1 className='font-bold my-7 text-2xl'>{name}</h1>
        <h3 className='font-bold text-lg'>{cuisines.join(", ")} : {costForTwoMessage}</h3>

        
 {
            categories.map((el)=>(

                <RestoCategory categoriesProps={el.card.card} />
            ))
        } 
         
    </div>
  )
}

export default RestoMenu