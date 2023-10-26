import React from 'react'
import RestoCard from './RestoCard'
import './Body.css'
import Loader from './Loader'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
const Body = () => {

  const [listOfResto, setListResto]= React.useState([])
  const [copyData, setCopyData] =React.useState([])
  const onlineStatus= useOnlineStatus()

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


 
  if(onlineStatus===false){
    return(
      <>
   

      <h1>offline</h1>
      </>

    ) 
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

 <Link to={"/restaurants/"+el.info.id}> <RestoCard key={el.info.id} resData={el} />   </Link>
  


      ))}


    </div>

  </>


}

export default Body