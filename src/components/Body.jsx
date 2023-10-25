import React from 'react'
import RestoCard from './RestoCard'
import './Body.css'
import  restoData  from '../utils/mockData'
import Loader from './Loader'

const Body = () => {

  const [listOfResto, setListResto]= React.useState([])
  const [copyData, setCopyData] =React.useState([])
console.log(copyData)
 React.useEffect(()=>{

   fetchData()
 },[])


 const fetchData= async ()=>{

 try {
  const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

  const jsonData= await data.json()

  setListResto(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
  setCopyData(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
 } catch (error) {
  
   console.log('error', error)
 }
  

 }


  return  listOfResto.length===0? <Loader/>: <>
  
  
  

    <input type="text" placeholder='Search' onChange={(e)=>{
      

      const filteredData= listOfResto.filter((el)=>el.info.name.toLowerCase().includes(e.target.value.toLocaleLowerCase()) )
      
      setCopyData(filteredData)


    }} />

<button onClick={()=>{


    
   const filteredData  = listOfResto.filter((el)  => el.info.avgRating>=4
);

 setListResto(filteredData)
        
}} >Top rated Resto</button>





    <div className='resCardBody'>


      {copyData.map((el) => (

        <RestoCard key={el.info.id} resData={el} />


      ))}


    </div>

  </>


}

export default Body