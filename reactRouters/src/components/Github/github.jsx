import React, { useEffect, useState } from "react";

export default function Github(){
    const [data,setdata]=useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/aman8934')
      .then(response => response.json())
      .then(data =>{
        console.log(data)
        setdata(data)
      })
    
     
    }, [])
    
    return(
        <div
        className="text-center m-4 bg-gray-600 text-white">
            Github Follower :{data.followers}
        </div>

    )
}
