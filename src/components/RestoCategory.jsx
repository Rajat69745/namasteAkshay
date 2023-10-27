import React from 'react'
import RestoItemsList from './RestoItemsList'

const RestoCategory = ({categoriesProps}) => {
    const [showItems, setShowItems]= React.useState(false)


    const handleClick=()=>{

        showItems?  setShowItems(false):setShowItems(true)
    
    }

   // console.log(categoriesProps)
  return (
    <div>

<div className='w-[50%] m-auto bg-gray-50 my-4 shadow-lg p-4 hover:cursor-pointer' onClick={handleClick} >

<div className='flex justify-between '  >  

    <span className='font-bold'>{categoriesProps.title} ({categoriesProps.itemCards.length})</span>
    <span><svg fill="none" className='h-6' stroke="currentColor"  stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
</svg></span>

</div>

{
     showItems && <RestoItemsList itemCards={categoriesProps.itemCards}/>

}

</div>

    </div>
  )
}

export default RestoCategory