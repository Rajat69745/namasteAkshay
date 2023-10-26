import React from 'react'
import restoMenuApi from '../api/restoMenuApi'
import { useParams } from 'react-router-dom'
const useRestoMenu = () => {
    const [resInfo, setResInfo]= React.useState(null)
    React.useEffect(()=>{

        fetchData()
    },[])

    const {resId}= useParams()
   

    const fetchData= async()=>{

        try {
            const data = await fetch( restoMenuApi+resId)
            const json= await data.json()
          
            setResInfo(json)
           // console.log(json)
            
        } catch (error) {
            
        }

       
    }
  return (
  resInfo
  )
}

export default useRestoMenu