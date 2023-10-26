import React from 'react'

const useOnlineStatus = () => {

    const [onineStatus , setOnlineStatus]= React.useState(true)


    React.useEffect(()=>{


 window.addEventListener("offline", ()=>{

    setOnlineStatus(false)
 })

 window.addEventListener("online",()=>{

    setOnlineStatus(true)
 })

    },[])
  return  onineStatus


    
  
}

export default useOnlineStatus