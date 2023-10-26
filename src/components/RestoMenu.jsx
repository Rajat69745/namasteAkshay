import React from 'react'
import useRestoMenu from '../utils/useRestoMenu'

const RestoMenu = () => {


    const resInfo= useRestoMenu()
   
  

if( resInfo===null) return <h1>loading</h1> 


    const {name,cuisines, costForTwoMessage}= resInfo.data?.cards[0]?.card?.card?.info
    const {itemCards}= resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card

 //  console.log(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card)


   
     

   // console.log(resInfo?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card)
  return (
    <div>
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")} : {costForTwoMessage}</h3>
        {
            itemCards.map((el)=>(

                <h3 key={el.card.info.id}>{el.card.info.name} : {el.card.info.price}</h3>
            ))
        }
        
    </div>
  )
}

export default RestoMenu